import BaseUseCase from "@utils/abstruct/usecase";

import AwsS3Client from "@clients/awss3";
import { Thumbnail } from "@models/value_object/works";
import DeleteFromS3Service from "@models/service/deleteFromS3";

export default class DeleteThumbnailUseCase implements BaseUseCase<string, void> {
    client: AwsS3Client;
    request: string;

    constructor(client: AwsS3Client, request: string) {
        this.client = client;
        this.request = request;
    }


    async execute() {
        const usecase = new DeleteFromS3Service(
            this.client,
            new Thumbnail(this.request)
        );
        await usecase.execute();
    }
}