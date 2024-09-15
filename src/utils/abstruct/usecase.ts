import BaseEntity from "./entity";
import BaseRepository from "./repository";
import BaseService from "./service";

export default interface BaseUseCase<ReqDTO, ResDTO>{
    request?: ReqDTO;
    repository?: BaseRepository<BaseEntity<any, any>>;
    service?: BaseService<any>;
    execute(): Promise<ResDTO|void>;
}