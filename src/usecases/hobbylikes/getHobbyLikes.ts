import BaseUseCase from "@utils/abstruct/usecase";
import { HobbyLikesRepository } from "@models/repository";
import { HobbyLikesEntity } from "@models/entity";


export default class GetHobbyLikesUseCase implements BaseUseCase<undefined, HobbyLikesEntity[]> {
    repository: HobbyLikesRepository;

    constructor(repository: HobbyLikesRepository) {
        this.repository = repository;
    }

    async execute() {
        return await this.repository.selectAll();
    }
}