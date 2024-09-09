import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "../error";

class ProgressError extends ValueObjectError<number> {
    constructor(
        public error_value: number,
        public message: string
    ) {
        super(
            error_value,
            "Skills",
            "Progress",
            message,
        );
    }
}

export default class Progress extends BaseValueObject<number> {
    validate(const_val: number): number {
        if (isNaN(const_val))                    throw new ProgressError(const_val, "数値ではありません");
        if (const_val <= 0 || const_val > 10)    throw new ProgressError(const_val, "1以上10以下である必要があります");
        if (Math.floor(const_val) !== const_val) throw new ProgressError(const_val, "整数である必要があります");
        return const_val;
    }
}