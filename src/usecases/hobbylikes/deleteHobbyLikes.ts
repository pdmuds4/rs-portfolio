import BaseUseCase from "@utils/abstruct/usecase";
import { HobbyLikesRepository } from "@models/repository";
import { HobbyLikesID } from "@models/value_object/hobbylikes";


export default class DeleteHobbyLikesUseCase implements BaseUseCase<HobbyLikesID, void> {
    repository: HobbyLikesRepository;
    request: HobbyLikesID;

    constructor(repository: HobbyLikesRepository, request: HobbyLikesID) {
        this.repository = repository;
        this.request = request;
    }

    async execute() {
        return await this.repository.deleteById(this.request);
    }
}