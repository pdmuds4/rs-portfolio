import { S3Client } from "@aws-sdk/client-s3";

export default class AwsS3Client extends S3Client {
    readonly region: string;
    readonly bucket_name: string;

    constructor(
        region: string,
        access_key_id: string,
        secret_access_key: string,
        bucket_name: string
    ) {
        super({
            region: region,
            credentials: {
                accessKeyId: access_key_id,
                secretAccessKey: secret_access_key,
            },
        });

        this.region = region;
        this.bucket_name = bucket_name;
    }
}