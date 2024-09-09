import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "../error";

class TitleError extends ValueObjectError<string> {
    constructor(
        public error_value: string,
        public message: string
    ) {
        super(
            error_value,
            "Compose",
            "Title",
            message,
        );
    }
}

export default class Title extends BaseValueObject<string> {
    validate(const_val: string): string {
        if (const_val.length === 0)             throw new TitleError(const_val, "空文字です");
        if (const_val.length > 15)              throw new TitleError(const_val, "15文字を超えています");
        return const_val;
    }
}