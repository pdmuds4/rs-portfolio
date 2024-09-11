import SupabaseStorageClient from "@clients/supabase";
import BaseService from "@utils/abstruct/service";
import ServiceError from "@utils/exceptions/service";

import { SbFilePath } from "@models/value_object";
import { Thumbnail } from "@models/value_object/works";
import { Artwork, Audio } from "@models/value_object/compose";

export default class SignFileSrcService implements BaseService<Thumbnail|Artwork|Audio> {
    client: SupabaseStorageClient;
    file_path: SbFilePath;
    model_name: "Works" | "Compose";

    constructor(
        client: SupabaseStorageClient, 
        file_path: SbFilePath,
    ) {
        this.client = client;
        this.file_path = file_path;
        this.model_name = file_path.bucketName;
    }

    async execute(): Promise<Thumbnail|Artwork|Audio|void> {
        try {
            const { data, error } = await this.client
                .bucket(this.model_name)
                .createSignedUrl(this.file_path.value, 60);

            if(error) {
                throw new ServiceError(
                    400,
                    error.message,
                    this.model_name,
                    "SignFileSrcService",
                    "ファイルの署名に失敗しました"
                );
            } else {
                const src = data.signedUrl;
                if (this.model_name === "Works") {
                    return new Thumbnail(src);

                } else {
                    const class_name = src.split("/").at(-1);
                    if (class_name === "ArtWork") {
                        return new Artwork(src);
                    } else if (class_name === "Audio") {
                        return new Audio(src);
                    }
                }
            }
        } catch (e) {
            if (e instanceof ServiceError) {
                throw e;
            } else {
                throw new ServiceError(
                    500,
                    this.file_path,
                    this.file_path.bucketName,
                    "SignFileSrcService",
                    "ファイルの署名に失敗しました"
                );
            }
        }
    }
}