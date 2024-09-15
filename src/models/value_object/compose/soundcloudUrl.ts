import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "@utils/exceptions/value_object";

class SoundcloudUrlError extends ValueObjectError<string> {
    constructor(
        public error_val: string,
        public message: string,
    ) {
        super(
            error_val,
            "Compose",
            "SoundcloudUrl",
            message,
        );
    }
}

export default class SoundcloudUrl extends BaseValueObject<string> {
    validate(const_val: string): string {
        if (const_val.length === 0)       throw new SoundcloudUrlError(const_val, "空文字です");
        
        const url_pattern = /^https:\/\/(www\.)?soundcloud\.com\/[\w-]+\/[\w-]+$|^https:\/\/on\.soundcloud\.com\/[\w-]+$/;;
        if (!url_pattern.test(const_val)) throw new SoundcloudUrlError(const_val, "SoundcloudのURL形式ではありません");
        
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