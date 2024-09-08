export default interface BaseService<ReqDTO, ResDTO>{
    request: ReqDTO;
    execute(): Promise<ResDTO|void>;
}