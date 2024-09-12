import AwsS3Client from "@clients/awss3";
import { PutObjectCommand } from "@aws-sdk/client-s3";

import BaseService from "@utils/abstruct/service";
import ServiceError from "@utils/exceptions/service";
import { Thumbnail } from "@models/value_object/works";
import { Artwork, Audio } from "@models/value_object/compose";

export default class UploadToS3Service implements BaseService<Thumbnail|Artwork|Audio> {
    client: AwsS3Client;
    file_buffer: Buffer;
    model_name: "Works" | "Compose";
    class_name?: "Artwork" | "Audio";
    file_name: string;

    constructor(
        client: AwsS3Client,
        file_buffer: Buffer,
        file_name: string,
        model_name: "Works" | "Compose",
        class_name?: "Artwork" | "Audio",
    ) {
        this.client = client;
        this.file_buffer = file_buffer;
        this.model_name = model_name;
        this.class_name = class_name;
        this.file_name = file_name;
    }

    async execute(): Promise<any|void> {
        try {
            const path_key = `${this.model_name}/${this.class_name ? `${this.class_name}/` : ''}${this.file_name}`;
            const command = new PutObjectCommand({
                Bucket: this.client.bucket_name,
                Key:    path_key,
                Body:   this.file_buffer,
            });
            
            await this.client.send(command);
            const src = `https://${this.client.bucket_name}.s3.${this.client.region}.amazonaws.com/${path_key}`;

            if (this.model_name === "Works") {
                return new Thumbnail(src);
            } else {
                return this.class_name === "Artwork" ? new Artwork(src) : new Audio(src);
            }

        } catch (e) {
            if (e instanceof ServiceError) {
                throw e;
            } else if (e instanceof Error) {
                throw new ServiceError(
                    500,
                    e.message,
                    this.model_name,
                    "UploadToS3Service",
                    "ファイルのアップロードに失敗しました"
                );
            }
        }
    }
}