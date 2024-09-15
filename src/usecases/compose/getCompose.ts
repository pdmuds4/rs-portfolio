import BaseUseCase from "@utils/abstruct/usecase";
import { ComposeRepository } from "@models/repository";
import { ComposeEntity } from "@models/entity";


export default class GetComposeUseCase implements BaseUseCase<undefined, ComposeEntity[]> {
    repository: ComposeRepository;

    constructor(repository: ComposeRepository) {
        this.repository = repository;
    }

    async execute() {
        return await this.repository.selectAll();
    }
}