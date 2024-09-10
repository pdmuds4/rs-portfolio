export default interface BaseUseCase<ReqDTO, ResDTO>{
    request: ReqDTO;
    execute(): Promise<ResDTO|void>;
}