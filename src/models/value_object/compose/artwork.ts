import BaseURL from "../baseUrl";
import ValueObjectError from "@utils/exceptions/value_object";

class ArtworkError extends ValueObjectError<string> {
    constructor(
        public error_val: string,
        public message: string,
    ) {
        super(
            error_val,
            "Compose",
            "Artwork",
            message,
        );
    }
}

export default class Artwork extends BaseURL {
    constructor(value: string) {
        if (!value.includes('Compose')) throw new ArtworkError(value, "アートワークURLが不正です");
        super(value, "Compose", "Artwork");
    }
}