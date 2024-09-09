import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "../error";

class TitleError extends ValueObjectError<string> {
    constructor(
        public error_value: string,
        public message: string
    ) {
        super(
            error_value,
            "Skills",
            "Title",
            message
        );
    }
}

export default class Title extends BaseValueObject<string> {
    validate(const_val: string): string {
        if (const_val.length === 0)             throw new TitleError(const_val, "空文字です");
        if (const_val.length > 12)              throw new TitleError(const_val, "12文字を超えています");
        if (!/^[\x20-\x7E]+$/.test(const_val))  throw new TitleError(const_val, "半角文字のみである必要があります");
        return const_val;
    }
}