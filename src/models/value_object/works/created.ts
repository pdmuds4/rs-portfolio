import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "@utils/exceptions/value_object";

class CreatedError extends ValueObjectError<Date> {
    constructor(
        public error_value: Date,
        public message: string
    ) {
        super(
            error_value,
            "Works",
            "Created",
            message,
        );
    }
}

export default class Created extends BaseValueObject<Date> {
    validate(const_val: Date): Date {
        if (const_val > new Date()) throw new CreatedError(const_val, "未来の日付は無効です");

        return const_val;
    }
}