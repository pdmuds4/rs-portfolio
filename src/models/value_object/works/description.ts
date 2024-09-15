import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "@utils/exceptions/value_object";

class DescriptionError extends ValueObjectError<string> {
    constructor(
        public error_value: string,
        public message: string
    ) {
        super(
            error_value,
            "Works",
            "Description",
            message,
        );
    }
}

export default class Description extends BaseValueObject<string> {
    validate(const_val: string): string {
        if (const_val.length === 0) throw new DescriptionError(const_val, "空文字です");
        if (const_val.length > 60)  throw new DescriptionError(const_val, "60文字を超えています");
        return const_val;
    }
}