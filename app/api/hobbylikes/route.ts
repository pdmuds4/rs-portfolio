import MongoDBClient from "@clients/mongodb";
import BaseError from "@utils/abstruct/error";

import { HobbyLikesDTO } from "@models/entity/hobbylikes";
import { HobbyLikesID, Title, Panel, Detail } from "@models/value_object/hobbylikes";
import { HobbyLikesEntity } from "@models/entity";
import { HobbyLikesRepository } from "@models/repository";
import { GetHobbyLikesUseCase, InsertHobbyLikesUseCase, UpdateHobbyLikesUseCase, DeleteHobbyLikesUseCase } from "@usecases/hobbylikes";


const client = new MongoDBClient(process.env.MONGODB_URI || '');
const repository = new HobbyLikesRepository(client);


export async function GET() {
    try {
        const usecase = new GetHobbyLikesUseCase(repository);
        const response = await usecase.execute() as HobbyLikesEntity[];

        return Response.json(
            response.map((hobbylike) => hobbylike.toJson()),
            {
                status: 200
            }
        );
    } catch (error) {
        if (error instanceof BaseError)
            return Response.json(
                {
                    message: error.message
                },
                {
                    status: error.status_code
                }
            );
    }
}


export async function POST(request: Request) {
    try {
        const request_data = await request.json() as HobbyLikesDTO;
        const request_entity = new HobbyLikesEntity(
            new HobbyLikesID(request_data.id),
            new Title       (request_data.title),
            new Panel       (request_data.panel),
            new Detail      (request_data.detail)
        );
        const usecase = new InsertHobbyLikesUseCase(repository, request_entity);
        const response = await usecase.execute() as HobbyLikesEntity;

        return Response.json(
            response.toJson(),
            {
                status: 200
            }
        );
    } catch (error) {
        if (error instanceof BaseError)
            return Response.json(
                {
                    message: error.message
                },
                {
                    status: error.status_code
                }
            );
    }
}


export async function PUT(request: Request) {
    try {
        const request_data = await request.json() as HobbyLikesDTO;
        const request_entity = new HobbyLikesEntity(
            new HobbyLikesID(request_data.id),
            new Title       (request_data.title),
            new Panel       (request_data.panel),
            new Detail      (request_data.detail)
        );
        const usecase = new UpdateHobbyLikesUseCase(repository, request_entity);
        const response = await usecase.execute() as HobbyLikesEntity;

        return Response.json(
            response.toJson(),
            {
                status: 200
            }
        );
    } catch (error) {
        if (error instanceof BaseError)
            return Response.json(
                {
                    message: error.message
                },
                {
                    status: error.status_code
                }
            );
    }
}


export async function DELETE(request: Request) {
    try {
        const request_data = new URL(request.url).searchParams.get('id');

        if (request_data) {
            const request_id = new HobbyLikesID(parseInt(request_data));
            const usecase = new DeleteHobbyLikesUseCase(repository, request_id);
            await usecase.execute()

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
                'HobbyLikes',
                'DELETE',
                'idパスパラメータがないか、不正です',
                request_data
            );
        }
    } catch (error) {
        if (error instanceof BaseError)
            return Response.json(
                {
                    message: error.message
                },
                {
                    status: error.status_code
                }
            );
    }
}