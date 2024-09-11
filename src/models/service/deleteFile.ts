import SupabaseStorageClient from "@clients/supabase";
import BaseService from "@utils/abstruct/service";
import ServiceError from "@utils/exceptions/service";
import { SupabasePath } from "@models/value_object";

export default class DeleteFileService implements BaseService<void> {
    client: SupabaseStorageClient;
    file_path: SupabasePath;
    model_name: "Works" | "Compose";

    constructor(
        client: SupabaseStorageClient, 
        file_path: SupabasePath,
        model_name: "Works" | "Compose"
    ) {
        this.client = client;
        this.file_path = file_path;
        this.model_name = model_name;
    }

    async execute(): Promise<void> {
        try {
            const { data, error } = await this.client
                .bucket(this.model_name)
                .remove([this.file_path.value]);

            if(error) {
                throw new ServiceError(
                    400,
                    error.message,
                    this.model_name,
                    "DeleteFileService",
                    "ファイルの削除に失敗しました"
                );
            }
        } catch (e) {
            if (e instanceof ServiceError) {
                throw e;
            } else {
                throw new ServiceError(
                    500,
                    this.file_path,
                    this.model_name,
                    "deleteFileService",
                    "ファイルのアップロードに失敗しました"
                );
            }
        }
    }

}