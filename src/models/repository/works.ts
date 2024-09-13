import BaseRepository from "@utils/abstruct/repository";
import RepositoryError from "@utils/exceptions/repository";

import { Collection } from "mongodb";
import MongoDBClient from "@clients/mongodb";
import queryDB from "@utils/queryDB";

import { WorksEntity } from "@models/entity";
import { WorksID, Title, Thumbnail, Description, Repository, Link, Status, Created } from "@models/value_object/works";
import { SkillsID } from "@models/value_object/skills";

class WorksRepositoryError extends RepositoryError<WorksEntity|WorksID|null> {
    constructor(
        error_value: WorksEntity | WorksID | null,
        message: string
    ) {
        super(
            500, 
            error_value, 
            "Works", 
            "WorksRepository", 
            message
        );
    }
}

export default class WorksRepository implements BaseRepository<WorksEntity> {
    public Client: MongoDBClient;
    public ORM: Collection;
    
    constructor(client: MongoDBClient) {
        this.Client = client;
        this.ORM = client.collection('works');
    }

    async selectAll(): Promise<WorksEntity[]|void> {
        return await queryDB<null, WorksEntity[]>(this.Client, null,
            async () => {
                try {
                    const response = await this.ORM.find().toArray();
                    return response.map((work) => 
                        new WorksEntity(
                            new WorksID    (work.id),
                            new Title      (work.title),
                            new Thumbnail  (work.thumbnail),
                            new Description(work.description),
                            work.techs.map((tech: number) => new SkillsID(tech)),
                            new Repository (work.repository),
                            new Link       (work.link),
                            work.isprivate,
                            new Status     (work.status),
                            new Created    (work.created_at),
                        )
                    )
                } catch (error) {
                    if (error instanceof Error) {
                        throw new WorksRepositoryError(
                            null,
                            "全取得に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async insert(query: WorksEntity): Promise<WorksEntity|void> {
        return await queryDB<WorksEntity, WorksEntity>(this.Client, query,
            async () => {
                try {
                    await this.ORM.insertOne(query.toJson());
                    return query;
                } catch (error) {
                    if (error instanceof Error) {
                        throw new WorksRepositoryError(
                            query,
                            "データの挿入に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async update(query: WorksEntity): Promise<WorksEntity|void> {
        return await queryDB<WorksEntity, WorksEntity>(this.Client, query,
            async () => {
                try {
                    await this.ORM.updateOne(
                        { id: query.id.value },
                        { $set: query.toJson() }
                    );
                    return query;
                } catch (error) {
                    if (error instanceof Error) {
                        throw new WorksRepositoryError(
                            query,
                            "データの更新に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async deleteById(query: WorksID): Promise<void> {
        return await queryDB<WorksID, void>(this.Client, query,
            async () => {
                try {
                    await this.ORM.deleteOne({ id: query.value });
                } catch (error) {
                    if (error instanceof Error) {
                        throw new WorksRepositoryError(
                            query,
                            "データの削除に失敗しました"
                        );
                    }
                }
            }
        );
    }
}