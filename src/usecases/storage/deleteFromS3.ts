import AwsS3Client from "@clients/awss3";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

import BaseService from "@utils/abstruct/service";
import ServiceError from "@utils/exceptions/service";
import { Thumbnail } from "@models/value_object/works";
import { Artwork, Audio } from "@models/value_object/compose";

export type DeleteDTO = {
    file_url: string;
}

export default class DeleteFromS3UseCase implements BaseService<void> {
    client: AwsS3Client;
    url_object: Thumbnail | Artwork | Audio;
    model_name: string;

    constructor(
        client: AwsS3Client,
        url_object: Thumbnail | Artwork | Audio
    ) {
        this.client = client;
        this.url_object = url_object;
        this.model_name = url_object.model_name;
    }

    async execute(): Promise<void> {
        try {
            const base_path = `https://${this.client.bucket_name}.s3.${this.client.region}.amazonaws.com/`
            const path_key = this.url_object.value.replace(base_path, '');
            const command = new DeleteObjectCommand({
                Bucket: this.client.bucket_name,
                Key:    path_key,
            });
            
            await this.client.send(command);
        } catch (e) {
            if (e instanceof ServiceError) {
                throw e;
            } else if (e instanceof Error) {
                throw new ServiceError(
                    500,
                    e.message,
                    this.model_name,
                    "DeleteFromS3Service",
                    "ファイルの削除に失敗しました"
                );
            }
        }
    }
}