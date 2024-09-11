import { BaseURL } from "@models/value_object";
import BaseService from "@utils/abstruct/service";
import ServiceError from "@utils/exceptions/service";

export default class ImageUrlCheckService implements BaseService<BaseURL> {
    url: BaseURL;

    constructor(url: BaseURL) {
        this.url = url;
    }

    async execute(): Promise<BaseURL|void> {
        try {
            const response_header = await fetch(this.url.value, {method: 'HEAD'});
            const is_image = response_header.headers.get('Content-Type')?.includes('image')

            if(response_header.ok && is_image) {
                return this.url;
            } else {
                throw new ServiceError(
                    400,
                    this.url,
                    this.url.model_name,
                    this.url.class_name,
                    "画像URLではありません"
                );
            }
        } catch (e) {
            if (e instanceof ServiceError) {
                throw e;
            } else {
                throw new ServiceError(
                    500,
                    this.url,
                    this.url.model_name,
                    this.url.class_name,
                    "URLの取得に失敗しました"
                );
            }
        }
    }
}