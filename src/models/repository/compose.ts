import BaseRepository from "@utils/abstruct/repository";
import RepositoryError from "@utils/exceptions/repository";

import { Collection } from "mongodb";
import MongoDBClient from "@clients/mongodb";
import queryDB from "@utils/queryDB";

import { ComposeEntity } from "@models/entity";
import { ComposeID, Title, Artwork, Genre, Audio, YoutubeUrl, SoundcloudUrl, XUrl } from "@models/value_object/compose";

class ComposeRepositoryError extends RepositoryError<ComposeEntity|null> {
    constructor(
        error_value: ComposeEntity | null,
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
                    return response.map((work) => 
                        new ComposeEntity(
                            new ComposeID    (work.id),
                            new Title        (work.title),
                            new Artwork      (work.artwork),
                            new Genre        (work.genre),
                            new Audio        (work.audio),
                            new YoutubeUrl   (work.youtube_url),
                            new SoundcloudUrl(work.soundcloud_url),
                            new XUrl         (work.x_url),
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


    async deleteById(query: ComposeEntity): Promise<void> {
        return await queryDB<ComposeEntity, void>(this.Client, query,
            async () => {
                try {
                    await this.ORM.deleteOne({ id: query.id.value });
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