import AwsS3Client from "@clients/awss3";
import apiErrorHandler from "@utils/apiErrorHandler";

import { Thumbnail } from "@models/value_object/works";
import { UploadToS3UseCase, DeleteFromS3UseCase } from "@usecases/storage";
import { UploadDTO } from "@usecases/storage/uploadToS3";
import { DeleteDTO } from "@usecases/storage/deleteFromS3";


const client = new AwsS3Client(
    process.env.AWS_REGION || '',
    process.env.AWS_ACCESS_KEY_ID || '',
    process.env.AWS_SECRET_ACCESS_KEY || '',
    process.env.AWS_BUCKET_NAME || ''
);


export async function POST(request: Request) {
    return await apiErrorHandler(
        request,
        async () => {
            const request_data = await request.json() as UploadDTO;
            const request_buffer = Buffer.from(request_data.file_buffer);

            const usecase = new UploadToS3UseCase(
                client,
                request_buffer,
                request_data.file_name,
                "Works"
            );
            const response = await usecase.execute() as Thumbnail;

            return Response.json(
                {
                    thumbnail: response.value
                },
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
            const request_data = await request.json() as DeleteDTO;
            const usecase = new DeleteFromS3UseCase(
                client,
                new Thumbnail(request_data.file_url)
            );
            await usecase.execute();

            return Response.json(
                {
                    message: "Delete success"
                },
                {
                    status: 200
                }
            );
        }
    );
}