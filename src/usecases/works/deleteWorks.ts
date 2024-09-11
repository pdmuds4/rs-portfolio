import BaseUseCase from "@utils/abstruct/usecase";
import { WorksRepository } from "@models/repository";
import { WorksEntity } from "@models/entity";


export default class DeleteWorksUseCase implements BaseUseCase<WorksEntity, WorksEntity> {
    repository: WorksRepository;
    request: WorksEntity;

    constructor(repository: WorksRepository, request: WorksEntity) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        return await this.repository.deleteById(this.request);
    }
}