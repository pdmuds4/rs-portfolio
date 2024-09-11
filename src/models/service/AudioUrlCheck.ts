import { BaseURL } from "@models/value_object";
import BaseService from "@utils/abstruct/service";
import ServiceError from "@utils/exceptions/service";

export default class AudioUrlCheckService implements BaseService<BaseURL> {
    url: BaseURL;

    constructor(url: BaseURL) {
        this.url = url;
    }

    async execute(): Promise<BaseURL|void> {
        try {
            const response_header = await fetch(this.url.value, {method: 'HEAD'});
            const is_audio = response_header.headers.get('Content-Type')?.includes('audio')

            if(response_header.ok && is_audio) {
                return this.url;
            } else {
                throw new ServiceError(
                    400,
                    response_header,
                    this.url.model_name,
                    this.url.class_name,
                    "オーディオURLではありません"
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