import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda from Docker image
    const backendFn = new lambda.DockerImageFunction(this, "BackendFunction", {
      code: lambda.DockerImageCode.fromImageAsset("./app"),
      timeout: cdk.Duration.seconds(10),
      memorySize: 512,
    });

    // Add a public Lambda Function URL with CORS enabled
    const functionUrl = backendFn.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE, // no auth
      cors: {
        allowedOrigins: ["*"], // allow requests from anywhere
        allowedMethods: [lambda.HttpMethod.GET], // allow GET
      },
    });

    new cdk.CfnOutput(this, "BackendFunctionUrl", { value: functionUrl.url });
  }
}
