import BaseUseCase from "@utils/abstruct/usecase";
import { ComposeRepository } from "@models/repository";
import { ComposeEntity } from "@models/entity";
import { ComposeID } from "@models/value_object/compose";


export default class DeleteComposeUseCase implements BaseUseCase<ComposeID, ComposeEntity> {
    repository: ComposeRepository;
    request: ComposeID;

    constructor(repository: ComposeRepository, request: ComposeID) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        return await this.repository.deleteById(this.request);
    }
}