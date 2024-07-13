from aws_cdk import core
from aws_cdk.aws_lambda import DockerImageFunction, DockerImageCode

class CdkLambdaContainerStack(core.Stack):

    def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
        super().__init__(scope, id, **kwargs)

        # Define the Docker image Lambda function
        function = DockerImageFunction(
            self, 'MyLambdaFunction',
            code=DockerImageCode.from_image_asset('.'),
        )
