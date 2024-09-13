import BaseUseCase from "@utils/abstruct/usecase";
import { SkillsRepository } from "@models/repository";
import { SkillsEntity } from "@models/entity";
import { SkillsID } from "@models/value_object/skills";


export default class DeleteSkillsUseCase implements BaseUseCase<SkillsID, void> {
    repository: SkillsRepository;
    request: SkillsID;

    constructor(repository: SkillsRepository, request: SkillsID) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        return await this.repository.deleteById(this.request);
    }
}