export default interface BaseRepository<ORMClient, Entity> {
    ORM: ORMClient;
    selectAll? <QueryDTO>(query: QueryDTO): Promise<Entity[]>;
    selectById?<QueryDTO>(query: QueryDTO): Promise<Entity>;
    insert?    <QueryDTO>(query: QueryDTO): Promise<Entity>;
    update?    <QueryDTO>(query: QueryDTO): Promise<Entity>;
    deleteById?<QueryDTO>(query: QueryDTO): void;
}