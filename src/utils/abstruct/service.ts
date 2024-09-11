export default interface BaseService<ResObject>{
    execute(): Promise<ResObject|void>;
}