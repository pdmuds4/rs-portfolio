import BaseUseCase from "@utils/abstruct/usecase";
import { SkillsRepository } from "@models/repository";
import { SkillsEntity } from "@models/entity";


export default class InsertSkillsUseCase implements BaseUseCase<SkillsEntity, SkillsEntity> {
    repository: SkillsRepository;
    request: SkillsEntity;

    constructor(repository: SkillsRepository, request: SkillsEntity) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        return await this.repository.insert(this.request);
    }
}