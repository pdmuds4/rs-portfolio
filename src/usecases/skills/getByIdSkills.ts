import BaseUseCase from "@utils/abstruct/usecase";
import { SkillsRepository } from "@models/repository";
import { SkillsEntity } from "@models/entity";
import { SkillsID } from "@models/value_object/skills";


export default class GetByIdSkillsUseCase implements BaseUseCase<SkillsID, SkillsEntity|null> {
    repository: SkillsRepository;
    request: SkillsID

    constructor(repository: SkillsRepository, request: SkillsID) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        return await this.repository.selectById(this.request);
    }
}