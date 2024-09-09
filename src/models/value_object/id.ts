import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "./error";

class IDError extends ValueObjectError<number> {
    constructor(
        public error_value: number,
        public message: string
    ) {
        super(
            "",
            "ID",
            message,
            error_value
        );
    }
}

export default class ID extends BaseValueObject<number> {
    validate(const_val: number): number {
        if (isNaN(const_val))                    throw new IDError(const_val, "NaNです");
        if (const_val <= 0)                      throw new IDError(const_val, "1以上である必要があります");
        if (Math.floor(const_val) !== const_val) throw new IDError(const_val, "整数である必要があります");
        return const_val;
    }
}