import BaseUseCase from "@utils/abstruct/usecase";
import { WorksRepository } from "@models/repository";
import { WorksEntity } from "@models/entity";


export default class GetWorksUseCase implements BaseUseCase<undefined, WorksEntity[]> {
    repository: WorksRepository;

    constructor(repository: WorksRepository) {
        this.repository = repository;
    }

    async execute() {
        return await this.repository.selectAll();
    }
}