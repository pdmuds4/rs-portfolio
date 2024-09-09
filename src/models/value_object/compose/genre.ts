import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "../error";

class GenreError extends ValueObjectError<string> {
    constructor(
        public error_value: string,
        public message: string
    ) {
        super(
            error_value,
            "Compose",
            "Genre",
            message,
        );
    }
}

export default class Genre extends BaseValueObject<string> {
    validate(const_val: string): string {
        if (const_val.length === 0)             throw new GenreError(const_val, "空文字です");
        if (const_val.length > 20)              throw new GenreError(const_val, "20文字を超えています");
        return const_val;
    }
}