import BaseUseCase from "@utils/abstruct/usecase";
import { HobbyLikesRepository } from "@models/repository";
import { HobbyLikesEntity } from "@models/entity";


export default class DeleteHobbyLikesUseCase implements BaseUseCase<HobbyLikesEntity, HobbyLikesEntity> {
    repository: HobbyLikesRepository;
    request: HobbyLikesEntity;

    constructor(repository: HobbyLikesRepository, request: HobbyLikesEntity) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        return await this.repository.deleteById(this.request);
    }
}