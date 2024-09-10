import MongoDBClient from "@clients/mongodb";

export default interface BaseRepository<Entity> {
    ORM: MongoDBClient;
    selectAll?           (               ): Promise<Entity[]>;
    selectById?<QueryDTO>(query: QueryDTO): Promise<Entity>;
    insert?    <QueryDTO>(query: QueryDTO): Promise<Entity>;
    update?    <QueryDTO>(query: QueryDTO): Promise<Entity>;
    deleteById?<QueryDTO>(query: QueryDTO): void;
}