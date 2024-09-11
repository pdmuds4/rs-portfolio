import BaseUseCase from "@utils/abstruct/usecase";
import { SkillsRepository } from "@models/repository";
import { SkillsEntity } from "@models/entity";


export default class GetSkillssUseCase implements BaseUseCase<undefined, SkillsEntity[]> {
    repository: SkillsRepository;

    constructor(repository: SkillsRepository) {
        this.repository = repository;
    }

    async execute() {
        return await this.repository.selectAll();
    }
}