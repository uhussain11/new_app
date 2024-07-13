FROM public.ecr.aws/lambda/python:3.12

# Copy function code
COPY app.py ${LAMBDA_TASK_ROOT}

# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Set the CMD to your handler (could be app.lambda_handler)
CMD [ "app.lambda_handler" ]
