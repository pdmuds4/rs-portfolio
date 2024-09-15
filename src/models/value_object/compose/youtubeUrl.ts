import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "@utils/exceptions/value_object";

class YoutubeUrlError extends ValueObjectError<string> {
    constructor(
        public error_val: string,
        public message: string,
    ) {
        super(
            error_val,
            "Compose",
            "YoutubeUrl",
            message,
        );
    }
}

export default class YoutubeUrl extends BaseValueObject<string> {
    validate(const_val: string): string {
        if (const_val.length === 0)       throw new YoutubeUrlError(const_val, "空文字です");
        
        const url_pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
        if (!url_pattern.test(const_val)) throw new YoutubeUrlError(const_val, "YoutubeのURL形式ではありません");
        
        return const_val;
    }

    // [TODO] 画像URLのチェックをサービス層に移動
    // private async isValidImageUrl(const_val: string): Promise<boolean> {
    //     try {
    //         const response = await fetch(const_val, { method: "HEAD" });
    //         const content_type = response.headers.get("content-type");
    //         return Boolean(response.ok && content_type?.startsWith("image"));
    //     } catch (e) {
    //         throw new PanelError(const_val, "画像URLのチェックに失敗しました");
    //     }
    // }
}