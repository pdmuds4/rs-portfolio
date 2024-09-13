import MongoDBClient from "@clients/mongodb";
import BaseError from "@utils/abstruct/error";
import apiErrorHandler from "@utils/apiErrorHandler";

import { WorksDTO } from "@models/entity/works";
import { SkillsID } from "@models/value_object/skills";
import { WorksID, Title, Thumbnail, Description, Repository, Link, Status, Created } from "@models/value_object/works";
import { WorksEntity } from "@models/entity";
import { WorksRepository } from "@models/repository";
import { GetWorksUseCase, InsertWorksUseCase, UpdateWorksUseCase, DeleteWorksUseCase } from "@usecases/works";


const client = new MongoDBClient(process.env.MONGODB_URI || '');
const repository = new WorksRepository(client);


export async function GET(request: Request) {
    return await apiErrorHandler(
        request,
        async () => {
            const usecase = new GetWorksUseCase(repository);
            const response = await usecase.execute() as WorksEntity[];

            return Response.json(
                response.map((work) => work.toJson()),
                {
                    status: 200
                }
            );
        }
    );
}


export async function POST(request: Request) {
    return await apiErrorHandler(
        request,
        async () => {
            const request_data = await request.json() as WorksDTO;
            const request_entity = new WorksEntity(
                new WorksID     (request_data.id),
                new Title       (request_data.title),
                new Thumbnail   (request_data.thumbnail),
                new Description (request_data.description),
                request_data.techs.map((tech) => new SkillsID(tech)),
                new Repository  (request_data.repository),
                request_data.link ? new Link(request_data.link) : null,
                request_data.isprivate,
                new Status      (request_data.status),
                new Created     (request_data.created)
            );
            const usecase = new InsertWorksUseCase(repository, request_entity);
            const response = await usecase.execute() as WorksEntity;

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
            const request_data = await request.json() as WorksDTO;
            const request_entity = new WorksEntity(
                new WorksID     (request_data.id),
                new Title       (request_data.title),
                new Thumbnail   (request_data.thumbnail),
                new Description (request_data.description),
                request_data.techs.map((tech) => new SkillsID(tech)),
                new Repository  (request_data.repository),
                request_data.link ? new Link(request_data.link) : null,
                request_data.isprivate,
                new Status      (request_data.status),
                new Created     (new Date(request_data.created))
            );
            const usecase = new UpdateWorksUseCase(repository, request_entity);
            const response = await usecase.execute() as WorksEntity;

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
                const request_id = new WorksID(parseInt(request_data));
                const usecase = new DeleteWorksUseCase(repository, request_id);
                await usecase.execute();

                return Response.json(
                    {
                        message: "Deleted"
                    },
                    {
                        status: 200
                    }
                );
            } else {
                throw new BaseError(
                    400, 
                    'infrastructure',
                    'Works',
                    'DELETE',
                    'idパスパラメータがないか、不正です',
                    request_data
                );
            }
        }
    );
}