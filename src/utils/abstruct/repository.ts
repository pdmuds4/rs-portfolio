import MongoDBClient from "@clients/mongodb";
import { Collection } from "mongodb";

export default interface BaseRepository<Entity> {
    Client: MongoDBClient;
    ORM: Collection;
    selectAll? (             ): Promise<Entity[]|void>;
    selectById?(query: Entity): Promise<Entity  |void>;
    insert?    (query: Entity): Promise<Entity  |void>;
    update?    (query: Entity): Promise<Entity  |void>;
    deleteById?(query: Entity): Promise<void>;
}