import MongoDBClient from "@clients/mongodb";
import BaseError from "@utils/abstruct/error";
import apiErrorHandler from "@utils/apiErrorHandler";

import { SkillsDTO } from "@models/entity/skills";
import { SkillsID, Title, Symbol, Progress, Category } from "@models/value_object/skills";
import { SkillsEntity } from "@models/entity";
import { SkillsRepository } from "@models/repository";
import { GetSkillsUseCase, GetByIdSkillsUseCase, InsertSkillsUseCase, UpdateSkillsUseCase, DeleteSkillsUseCase } from "@usecases/skills";


const client = new MongoDBClient(process.env.MONGODB_URI || '');
const repository = new SkillsRepository(client);


export async function GET(request: Request) {
    return await apiErrorHandler(
        request,
        async () => {
            const request_data = new URL(request.url).searchParams.get('id');

            if (request_data) {
                const request_id = new SkillsID(parseInt(request_data));
                const usecase = new GetByIdSkillsUseCase(repository, request_id);
                const response = await usecase.execute() as SkillsEntity | null;
                const response_json = response ? response.toJson() : null;

                return Response.json(
                    response_json,
                    {
                        status: 200
                    }
                );
            } else {
                const usecase = new GetSkillsUseCase(repository);
                const response = await usecase.execute() as SkillsEntity[];

                return Response.json(
                    response.map((skill) => skill.toJson()),
                    {
                        status: 200
                    }
                );
            }
        }
    );
}


export async function POST(request: Request) {
    return await apiErrorHandler(
        request,
        async () => {
            const request_data = await request.json() as SkillsDTO;
            const request_entity = new SkillsEntity(
                new SkillsID(request_data.id),
                new Title   (request_data.title),
                new Symbol  (request_data.symbol),
                new Progress(request_data.progress),
                new Category(request_data.category)
            );
            const usecase = new InsertSkillsUseCase(repository, request_entity);
            const response = await usecase.execute() as SkillsEntity;

            return Response.json(
                response.toJson(),
                {
                    status: 200
                }
            );
        }
    );
}


export async function PUT(request: Request) {
    return await apiErrorHandler(
        request,
        async () => {
            const request_data = await request.json() as SkillsDTO;
            const request_entity = new SkillsEntity(
                new SkillsID(request_data.id),
                new Title   (request_data.title),
                new Symbol  (request_data.symbol),
                new Progress(request_data.progress),
                new Category(request_data.category)
            );
            const usecase = new UpdateSkillsUseCase(repository, request_entity);
            const response = await usecase.execute() as SkillsEntity;

            return Response.json(
                response.toJson(),
                {
                    status: 200
                }
            );
        }
    );
}


export async function DELETE(request: Request) {
    return await apiErrorHandler(
        request,
        async () => {
            const request_data = new URL(request.url).searchParams.get('id');

            if (request_data) {
                const request_id = new SkillsID(parseInt(request_data));
                const usecase = new DeleteSkillsUseCase(repository, request_id);
                await usecase.execute()

                return Response.json(
                    {
                        message: "Delete Success"
                    },
                    {
                        status: 200
                    }
                );
            } else {
                throw new BaseError(
                    400, 
                    'Infrastructure',
                    'Skills',
                    'DELETE',
                    'idパスパラメータがないか、不正です',
                    request_data
                );
            }
        }
    );
}