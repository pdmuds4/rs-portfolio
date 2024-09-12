import BaseURL from "../baseUrl";
import ValueObjectError from "@utils/exceptions/value_object";

class AudioError extends ValueObjectError<string> {
    constructor(
        public error_val: string,
        public message: string,
    ) {
        super(
            error_val,
            "Compose",
            "Audio",
            message,
        );
    }
}

export default class Audio extends BaseURL {
    constructor(value: string) {
        if (!value.includes('Compose')) throw new AudioError(value, "オーディオURLが不正です");
        super(value, "Compose", "Audio");
    }
}