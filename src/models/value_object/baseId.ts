import ValueObjectError from "@utils/exceptions/value_object";

export default class BaseID {
    private readonly _value: number;
    private model_name: string;
    private class_name: string = "ID";

    constructor(value: number, model_name: string, class_name?: string) {
        this.model_name = model_name;
        if (class_name) this.class_name = class_name;
        this._value = this.validate(value);
    }


    validate(const_val: number): number {
        if (isNaN(const_val))                    this.throwIDError(const_val, "数値ではありません");
        if (const_val <= 0)                      this.throwIDError(const_val, "1以上である必要があります");
        if (Math.floor(const_val) !== const_val) this.throwIDError(const_val, "整数である必要があります");
        return const_val;
    }

    throwIDError(error_value: number, message: string): void {
        throw new ValueObjectError<number>(error_value, this.model_name, this.class_name, message);
    }

    get value(): number {
        return this._value;
    }
}