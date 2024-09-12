import BaseService from "@utils/abstruct/service";
import ServiceError from "@utils/exceptions/service";

import { Panel } from "@models/value_object/hobbylikes";
import { Symbol } from "@models/value_object/skills";
import { Thumbnail } from "@models/value_object/works";
import { Artwork } from "@models/value_object/compose";

export default class ImageUrlCheckService implements BaseService<Panel|Symbol|Thumbnail|Artwork> {
    url: Panel | Symbol | Thumbnail | Artwork;

    constructor(url: Panel | Symbol | Thumbnail | Artwork) {
        this.url = url;
    }

    async execute(): Promise<Panel|Symbol|Thumbnail|Artwork|void> {
        try {
            const response_header = await fetch(this.url.value, {method: 'HEAD'});
            const is_image = response_header.headers.get('Content-Type')?.includes('image')

            if(response_header.ok && is_image) {
                return this.url;
            } else {
                throw new ServiceError(
                    400,
                    this.url.value,
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
                    this.url.value,
                    this.url.model_name,
                    this.url.class_name,
                    "URLの取得に失敗しました"
                );
            }
        }
    }
}