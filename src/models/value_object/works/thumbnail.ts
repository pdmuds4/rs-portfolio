import BaseURL from "../baseUrl";
import ValueObjectError from "@utils/exceptions/value_object";

class ThumbnailError extends ValueObjectError<string> {
    constructor(
        public error_val: string,
        public message: string,
    ) {
        super(
            error_val,
            "Works",
            "Thumbnail",
            message,
        );
    }
}

export default class Thumbnail extends BaseURL {
    constructor(value: string) {
        if (!value.includes('Works')) throw new ThumbnailError(value, "サムネイルURLが不正です");
        super(value, "Works", "Thumbnail");
    }
}