import { StackProps } from "aws-cdk-lib";

export interface ValculatorStackProps extends StackProps {
  bucketName: string;
}
