import SupabaseStorageClient from "@clients/supabase";
import BaseService from "@utils/abstruct/service";
import ServiceError from "@utils/exceptions/service";
import { SupabasePath } from "@models/value_object";

export default class UploadFileService implements BaseService<SupabasePath> {
    client: SupabaseStorageClient;
    upload_file: File;
    model_name: "Works" | "Compose";
    class_name?: "Artwork" | "Audio"

    constructor(
        client: SupabaseStorageClient, 
        upload_file: File,
        model_name: "Works" | "Compose",
        class_name?: "Artwork" | "Audio"
    ) {
        this.client = client;
        this.upload_file = upload_file;
        this.model_name = model_name;
        this.class_name = class_name;
    }

    async execute(): Promise<SupabasePath|void> {
        try {
            const { data, error } = await this.client.bucket(this.model_name)
                .upload(
                    `${this.class_name ? `${this.class_name}/` : ''}${this.upload_file.name}`,
                    this.upload_file, 
                    { upsert: true }
                );

            if(error) {
                throw new ServiceError(
                    400,
                    error.message,
                    this.model_name,
                    "UploadFileService",
                    "ファイルのアップロードに失敗しました"
                );
            } else {
                return new SupabasePath(data.path);
                // const { data, } = await this.client.bucket("works_thumbnail")
                //     .createSignedUrl(data.path, 60);
                // return data?.signedUrl;
            }
        } catch (e) {
            if (e instanceof ServiceError) {
                throw e;
            } else {
                throw new ServiceError(
                    500,
                    this.upload_file,
                    this.model_name,
                    "UploadFileService",
                    "ファイルのアップロードに失敗しました"
                );
            }
        }
    }

}