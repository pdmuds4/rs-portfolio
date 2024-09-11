import BaseUseCase from "@utils/abstruct/usecase";
import { ComposeRepository } from "@models/repository";
import { ComposeEntity } from "@models/entity";


export default class UpdateComposeUseCase implements BaseUseCase<ComposeEntity, ComposeEntity> {
    repository: ComposeRepository;
    request: ComposeEntity;

    constructor(repository: ComposeRepository, request: ComposeEntity) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        return await this.repository.update(this.request);
    }
}