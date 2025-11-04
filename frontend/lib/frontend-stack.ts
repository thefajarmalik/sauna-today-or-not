import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";

export class FrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create S3 bucket
    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      websiteIndexDocument: "index.html",
      publicReadAccess: true, // simple public access for static site
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS_ONLY,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // optional, for cleanup
      autoDeleteObjects: true, // optional, deletes objects when stack is destroyed
    });

    // Deploy static site contents to S3
    new s3deploy.BucketDeployment(this, "DeploySite", {
      sources: [s3deploy.Source.asset("./app")], // path to HTML+JS files
      destinationBucket: siteBucket,
    });

    new cdk.CfnOutput(this, "SiteURL", {
      value: siteBucket.bucketWebsiteUrl,
    });
  }
}
