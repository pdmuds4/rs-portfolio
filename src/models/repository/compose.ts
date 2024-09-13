import BaseRepository from "@utils/abstruct/repository";
import RepositoryError from "@utils/exceptions/repository";

import { Collection } from "mongodb";
import MongoDBClient from "@clients/mongodb";
import queryDB from "@utils/queryDB";

import { ComposeEntity } from "@models/entity";
import { ComposeID, Title, Artwork, Genre, Audio, YoutubeUrl, SoundcloudUrl, XUrl } from "@models/value_object/compose";

class ComposeRepositoryError extends RepositoryError<ComposeEntity|ComposeID|null> {
    constructor(
        error_value: ComposeEntity | ComposeID | null,
        message: string
    ) {
        super(
            500, 
            error_value, 
            "Compose", 
            "ComposeRepository", 
            message
        );
    }
}

export default class ComposeRepository implements BaseRepository<ComposeEntity> {
    public Client: MongoDBClient;
    public ORM: Collection;
    
    constructor(client: MongoDBClient) {
        this.Client = client;
        this.ORM = client.collection('compose');
    }

    async selectAll(): Promise<ComposeEntity[]|void> {
        return await queryDB<null, ComposeEntity[]>(this.Client, null,
            async () => {
                try {
                    const response = await this.ORM.find().toArray();
                    return response.map((compose) => 
                        new ComposeEntity(
                            new ComposeID    (compose.id),
                            new Title        (compose.title),
                            new Artwork      (compose.artwork),
                            new Genre        (compose.genre),
                            new Audio        (compose.audio),
                            new YoutubeUrl   (compose.youtube),
                            new SoundcloudUrl(compose.soundcloud),
                            new XUrl         (compose.x),
                        )
                    )
                } catch (error) {
                    if (error instanceof Error) {
                        throw new ComposeRepositoryError(
                            null,
                            "全取得に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async insert(query: ComposeEntity): Promise<ComposeEntity|void> {
        return await queryDB<ComposeEntity, ComposeEntity>(this.Client, query,
            async () => {
                try {
                    await this.ORM.insertOne(query.toJson());
                    return query;
                } catch (error) {
                    if (error instanceof Error) {
                        throw new ComposeRepositoryError(
                            query,
                            "データの挿入に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async update(query: ComposeEntity): Promise<ComposeEntity|void> {
        return await queryDB<ComposeEntity, ComposeEntity>(this.Client, query,
            async () => {
                try {
                    await this.ORM.updateOne(
                        { id: query.id.value },
                        { $set: query.toJson() }
                    );
                    return query;
                } catch (error) {
                    if (error instanceof Error) {
                        throw new ComposeRepositoryError(
                            query,
                            "データの更新に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async deleteById(query: ComposeID): Promise<void> {
        return await queryDB<ComposeID, void>(this.Client, query,
            async () => {
                try {
                    await this.ORM.deleteOne({ id: query.value });
                } catch (error) {
                    if (error instanceof Error) {
                        throw new ComposeRepositoryError(
                            query,
                            "データの削除に失敗しました"
                        );
                    }
                }
            }
        );
    }
}