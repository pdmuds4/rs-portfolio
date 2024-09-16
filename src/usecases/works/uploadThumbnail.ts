import BaseUseCase from "@utils/abstruct/usecase";

import AwsS3Client from "@clients/awss3";
import { Thumbnail } from "@models/value_object/works";
import UploadToS3Service from "@models/service/uploadToS3";


export default class UploadThumbnailUseCase implements BaseUseCase<File, {thumbnail: string}> {
    client: AwsS3Client;
    request: File;

    constructor(client: AwsS3Client, request: File) {
        this.client = client;
        this.request = request;
    }


    async execute() {
        const arrayBuffer = await this.request.arrayBuffer();
        const request_buffer = Buffer.from(arrayBuffer);

        const usecase = new UploadToS3Service(
            this.client,
            request_buffer,
            this.request.name,
            "Works"
        );
        const response = await usecase.execute() as Thumbnail;

        return {
            thumbnail: response.value
        };
    }
}