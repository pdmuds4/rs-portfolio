import MongoDBClient from "@clients/mongodb";
import { Collection } from "mongodb";

export default interface BaseRepository<Entity> {
    Client: MongoDBClient;
    ORM: Collection;
    selectAll? (             ): Promise<Entity[]|null|void>;
    selectById?(query: any   ): Promise<Entity  |null|void>;
    insert?    (query: Entity): Promise<Entity  |void>;
    update?    (query: Entity): Promise<Entity  |void>;
    deleteById?(query: any): Promise<void>;
}