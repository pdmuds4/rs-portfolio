import BaseUseCase from "@utils/abstruct/usecase";

import AwsS3Client from "@clients/awss3";
import { Artwork } from "@models/value_object/compose";
import DeleteFromS3Service from "@models/service/deleteFromS3";

export default class DeleteArtworkUseCase implements BaseUseCase<string, void> {
    client: AwsS3Client;
    request: string;

    constructor(client: AwsS3Client, request: string) {
        this.client = client;
        this.request = request;
    }


    async execute() {
        const usecase = new DeleteFromS3Service(
            this.client,
            new Artwork(this.request)
        );
        await usecase.execute();
    }
}