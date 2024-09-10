import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "@utils/exceptions/value_object";

class IDError extends ValueObjectError<number> {
    constructor(error_val: number, message: string) {
        super(
            error_val,
            "Any",
            "ID",
            message
        );
    }
}

export default class ID extends BaseValueObject<number> {
    validate(const_val: number): number {
        if (isNaN(const_val))                    throw new IDError(const_val, "数値ではありません");
        if (const_val <= 0)                      throw new IDError(const_val, "1以上である必要があります");
        if (Math.floor(const_val) !== const_val) throw new IDError(const_val, "整数である必要があります");
        return const_val;
    }
}