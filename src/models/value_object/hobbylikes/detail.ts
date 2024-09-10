import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "@utils/exceptions/value_object";

class DetailError extends ValueObjectError<string> {
    constructor(
        public error_value: string,
        public message: string
    ) {
        super(
            error_value,
            "HobbyLikes",
            "Detail",
            message,
        );
    }
}

export default class Detail extends BaseValueObject<string> {
    validate(const_val: string): string {
        if (const_val.length === 0)             throw new DetailError(const_val, "空文字です");
        if (const_val.length > 100)             throw new DetailError(const_val, "100文字を超えています");
        return const_val;
    }
}