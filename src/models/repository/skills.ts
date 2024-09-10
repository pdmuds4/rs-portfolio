import BaseRepository from "@utils/abstruct/repository";
import RepositoryError from "@utils/exceptions/repository";

import { Collection } from "mongodb";
import MongoDBClient from "@clients/mongodb";
import queryDB from "@utils/queryDB";

import { SkillsEntity } from "@models/entity";
import { SkillsID, Title, Symbol, Progress, Category } from "@models/value_object/skills";

class SkillsRepositoryError extends RepositoryError<SkillsEntity|null> {
    constructor(
        error_value: SkillsEntity | null,
        message: string
    ) {
        super(
            500, 
            error_value, 
            "Skills", 
            "SkillsRepository", 
            message
        );
    }
}

export default class SkillsRepository implements BaseRepository<SkillsEntity> {
    public Client: MongoDBClient;
    public ORM: Collection;
    
    constructor(client: MongoDBClient) {
        this.Client = client;
        this.ORM = client.collection('skills');
    }

    async selectAll(): Promise<SkillsEntity[]|void> {
        return await queryDB<null, SkillsEntity[]>(this.Client, null,
            async () => {
                try {
                    const response = await this.ORM.find().toArray();
                    return response.map((skill) => 
                        new SkillsEntity(
                            new SkillsID (skill.id),
                            new Title    (skill.title),
                            new Symbol   (skill.symbol),
                            new Progress (skill.progress),
                            new Category (skill.category)
                        )
                    )
                } catch (error) {
                    if (error instanceof Error) {
                        throw new SkillsRepositoryError(
                            null,
                            "全取得に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async selectById(query: SkillsEntity): Promise<SkillsEntity|null|void> {
        return await queryDB<SkillsEntity, SkillsEntity|null>(this.Client, query,
            async () => {
                try {
                    const response = await this.ORM.findOne({ id: query.id.value });
                    
                    if (response) {
                        return new SkillsEntity(
                            new SkillsID (response.id),
                            new Title    (response.title),
                            new Symbol   (response.symbol),
                            new Progress (response.progress),
                            new Category (response.category)
                        );
                    } else {
                        return null;
                    }
                } catch (error) {
                    if (error instanceof Error) {
                        throw new SkillsRepositoryError(
                            query,
                            "IDによる取得に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async insert(query: SkillsEntity): Promise<SkillsEntity|void> {
        return await queryDB<SkillsEntity, SkillsEntity>(this.Client, query,
            async () => {
                try {
                    await this.ORM.insertOne(query.toJson());
                    return query;
                } catch (error) {
                    if (error instanceof Error) {
                        throw new SkillsRepositoryError(
                            query,
                            "データの挿入に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async update(query: SkillsEntity): Promise<SkillsEntity|void> {
        return await queryDB<SkillsEntity, SkillsEntity>(this.Client, query,
            async () => {
                try {
                    await this.ORM.updateOne(
                        { id: query.id.value },
                        { $set: query.toJson() }
                    );
                    return query;
                } catch (error) {
                    if (error instanceof Error) {
                        throw new SkillsRepositoryError(
                            query,
                            "データの更新に失敗しました"
                        );
                    }
                }
            }
        );
    }


    async deleteById(query: SkillsEntity): Promise<void> {
        return await queryDB<SkillsEntity, void>(this.Client, query,
            async () => {
                try {
                    await this.ORM.deleteOne({ id: query.id.value });
                } catch (error) {
                    if (error instanceof Error) {
                        throw new SkillsRepositoryError(
                            query,
                            "データの削除に失敗しました"
                        );
                    }
                }
            }
        );
    }
}