import BaseUseCase from "@utils/abstruct/usecase";

import AwsS3Client from "@clients/awss3";
import { Artwork } from "@models/value_object/compose";
import UploadToS3Service from "@models/service/uploadToS3";


export default class UploadArtworkUseCase implements BaseUseCase<File, {artwork: string}> {
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
            "Compose",
            "Artwork"
        );
        const response = await usecase.execute() as Artwork;

        return {
            artwork: response.value
        };
    }
}