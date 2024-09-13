import BaseRepository from "@utils/abstruct/repository";
import RepositoryError from "@utils/exceptions/repository";

import { Collection } from "mongodb";
import MongoDBClient from "@clients/mongodb";
import queryDB from "@utils/queryDB";

import { HobbyLikesEntity } from "@models/entity";
import { HobbyLikesID, Title, Detail, Panel } from "@models/value_object/hobbylikes";
import { HobbyLikesDTO } from "@models/entity/hobbylikes";

class HobbyLikesRepositoryError extends RepositoryError<HobbyLikesEntity|HobbyLikesID|null> {
    constructor(
        error_value: HobbyLikesEntity | HobbyLikesID | null,
        message: string
    ) {
        super(
            500, 
            error_value, 
            "HobbyLikes", 
            "HobbyLikesRepository", 
            message
        );
    }
}

export default class HobbyLikesRepository implements BaseRepository<HobbyLikesEntity> {
    public Client: MongoDBClient;
    public ORM: Collection;
    
    constructor(client: MongoDBClient) {
        this.Client = client;
        this.ORM = client.collection('hobbylikes');
    }

    async selectAll(): Promise<HobbyLikesEntity[]|void> {
        return await queryDB<null, HobbyLikesEntity[]>(this.Client, null,
            async () => {
                try {
                    const response = await this.ORM.find().toArray();
                    return response.map((hobbylike: HobbyLikesDTO) => 
                        new HobbyLikesEntity(
                            new HobbyLikesID(hobbylike.id),
                            new Title       (hobbylike.title),
                            new Panel       (hobbylike.panel),
                            new Detail      (hobbylike.detail)
                        )
                    )
                } catch (error) {
                    if (error instanceof Error) {
                        throw new HobbyLikesRepositoryError(
                            null,
                            "全取得に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async insert(query: HobbyLikesEntity): Promise<HobbyLikesEntity|void> {
        return await queryDB<HobbyLikesEntity, HobbyLikesEntity>(this.Client, query,
            async () => {
                try {
                    await this.ORM.insertOne(query.toJson());
                    return query;
                } catch (error) {
                    if (error instanceof Error) {
                        throw new HobbyLikesRepositoryError(
                            query,
                            "データの挿入に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async update(query: HobbyLikesEntity): Promise<HobbyLikesEntity|void> {
        return await queryDB<HobbyLikesEntity, HobbyLikesEntity>(this.Client, query,
            async () => {
                try {
                    await this.ORM.updateOne(
                        { id: query.id.value },
                        { $set: query.toJson() }
                    );
                    return query;
                } catch (error) {
                    if (error instanceof Error) {
                        throw new HobbyLikesRepositoryError(
                            query,
                            "データの更新に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async deleteById(query: HobbyLikesID): Promise<void> {
        return await queryDB<HobbyLikesID, void>(this.Client, query,
            async () => {
                try {
                    await this.ORM.deleteOne({ id: query.value });
                } catch (error) {
                    if (error instanceof Error) {
                        throw new HobbyLikesRepositoryError(
                            query,
                            "データの削除に失敗しました"
                        );
                    }
                }
            }
        );
    }
}