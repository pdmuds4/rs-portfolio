import BaseUseCase from "@utils/abstruct/usecase";
import { WorksRepository } from "@models/repository";
import { WorksEntity } from "@models/entity";
import { WorksID } from "@models/value_object/works";


export default class DeleteWorksUseCase implements BaseUseCase<WorksID, void> {
    repository: WorksRepository;
    request: WorksID;

    constructor(repository: WorksRepository, request: WorksID) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        return await this.repository.deleteById(this.request);
    }
}