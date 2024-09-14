import MongoDBClient from "@clients/mongodb";
import BaseError from "@utils/abstruct/error";
import apiErrorHandler from "@utils/apiErrorHandler";

import { ComposeDTO } from "@models/entity/compose";
import { ComposeID, Title, Artwork, Genre, Audio, YoutubeUrl, SoundcloudUrl, XUrl } from "@models/value_object/compose";
import { ComposeEntity } from "@models/entity";
import { ComposeRepository } from "@models/repository";
import { GetComposeUseCase, InsertComposeUseCase, UpdateComposeUseCase, DeleteComposeUseCase } from "@usecases/compose";


const client = new MongoDBClient(process.env.MONGODB_URI || '');
const repository = new ComposeRepository(client);


export async function GET(request: Request) {
    return await apiErrorHandler(
        request,
        async () => {
            const usecase = new GetComposeUseCase(repository);
            const response = await usecase.execute() as ComposeEntity[];

            return Response.json(
                response.map((compose) => compose.toJson()),
                {
                    status: 200
                }
            );
        }
    );
};


export async function POST(request: Request) {
    return await apiErrorHandler(
        request,
        async () => {
            const request_data = await request.json() as ComposeDTO;
            const request_entity = new ComposeEntity(
                new ComposeID     (request_data.id),
                new Title         (request_data.title),
                new Artwork       (request_data.artwork),
                new Genre         (request_data.genre),
                new Audio         (request_data.audio),
                new YoutubeUrl    (request_data.youtube),
                new SoundcloudUrl (request_data.soundcloud),
                new XUrl          (request_data.x),
            );
            const usecase = new InsertComposeUseCase(repository, request_entity);
            const response = await usecase.execute() as ComposeEntity;

            return Response.json(
                response.toJson(),
                {
                    status: 200
                }
            );
        }
    );
};


export async function PUT(request: Request) {
    return await apiErrorHandler(
        request,
        async () => {
            const request_data = await request.json() as ComposeDTO;
            const request_entity = new ComposeEntity(
                new ComposeID     (request_data.id),
                new Title         (request_data.title),
                new Artwork       (request_data.artwork),
                new Genre         (request_data.genre),
                new Audio         (request_data.audio),
                new YoutubeUrl    (request_data.youtube),
                new SoundcloudUrl (request_data.soundcloud),
                new XUrl          (request_data.x),
            );
            const usecase = new UpdateComposeUseCase(repository, request_entity);
            const response = await usecase.execute() as ComposeEntity;

            return Response.json(
                response.toJson(),
                {
                    status: 200
                }
            );
        }
    );
};



export async function DELETE(request: Request) {
    return await apiErrorHandler(
        request,
        async () => {
            const request_data = new URL(request.url).searchParams.get('id');

            if (request_data) {
                const request_id = new ComposeID(parseInt(request_data));
                const usecase = new DeleteComposeUseCase(repository, request_id);
                await usecase.execute();

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
                    'Compose',
                    'DELETE',
                    'idパスパラメータがないか、不正です',
                    request_data
                );
            }
        }
    );
}