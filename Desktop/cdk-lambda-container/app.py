import json
import yfinance as yf
import pandas as pd
import boto3
import logging
import io

# Initialize clients
s3_client = boto3.client('s3')
ecs_client = boto3.client('ecs')
bucket_name = 'finera'  # Replace with your bucket name
cluster_name = 'your-ecs-cluster-name'  # Replace with your ECS cluster name
task_definition = 'your-task-definition'  # Replace with your ECS task definition
subnet_id = 'your-subnet-id'  # Replace with your subnet ID for networking
security_group_id = 'your-security-group-id'  # Replace with your security group ID

def save_to_s3(df, key):
    csv_buffer = io.StringIO()
    df.to_csv(csv_buffer)
    s3_client.put_object(Bucket=bucket_name, Key=key, Body=csv_buffer.getvalue())

def load_from_s3(key):
    response = s3_client.get_object(Bucket=bucket_name, Key=key)
    csv_buffer = io.StringIO(response['Body'].read().decode('utf-8'))
    df = pd.read_csv(csv_buffer, index_col=0, parse_dates=True)
    return df

def lambda_handler(event, context):
    body = json.loads(event['body'])
    ticker = body['ticker']
    period = body['period']
    start_date, end_date = period.split(':')
    strategy_code = body['code']
    capital = body['capital']
    cache_key = f"{ticker}_{start_date}_{end_date}.csv"

    try:
        logging.info(f"Checking for cached data in S3 for {ticker} from {start_date} to {end_date}")
        df = load_from_s3(cache_key)
        logging.info(f"Using cached data for {ticker} from {start_date} to {end_date} from S3")
    except s3_client.exceptions.NoSuchKey:
        logging.info(f"No cached data found in S3 for {ticker} from {start_date} to {end_date}")
        logging.info(f"Fetching data for ticker: {ticker} from {start_date} to {end_date}")
        df = yf.download(ticker, start=start_date, end=end_date, progress=False)
        logging.info(f"Data fetched successfully with shape {df.shape}")
        save_to_s3(df, cache_key)
        logging.info(f"Data for {ticker} from {start_date} to {end_date} saved to S3")

    # Trigger ECS Fargate task
    response = ecs_client.run_task(
        cluster=cluster_name,
        launchType='FARGATE',
        taskDefinition=task_definition,
        count=1,
        networkConfiguration={
            'awsvpcConfiguration': {
                'subnets': [subnet_id],
                'securityGroups': [security_group_id],
                'assignPublicIp': 'ENABLED'
            }
        },
        overrides={
            'containerOverrides': [
                {
                    'name': 'your-container-name',  # Replace with your container name
                    'environment': [
                        {'name': 'TICKER', 'value': ticker},
                        {'name': 'PERIOD', 'value': period},
                        {'name': 'STRATEGY_CODE', 'value': strategy_code},
                        {'name': 'CAPITAL', 'value': str(capital)},
                        {'name': 'CACHE_KEY', 'value': cache_key}
                    ]
                }
            ]
        }
    )

    # Return response with CORS headers
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
        },
        'body': json.dumps({
            'message': 'Backtest initiated',
            'taskArn': response['tasks'][0]['taskArn']
        })
    }
