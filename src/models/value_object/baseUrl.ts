import ValueObjectError from "@utils/exceptions/value_object";

export default class BaseURL {
    private readonly _value: string;
    readonly model_name: string;
    readonly class_name: string;

    constructor(value: string, model_name: string, class_name: string) {
        this.model_name = model_name;
        this.class_name = class_name;
        this._value = this.validate(value);
    }

    validate(const_val: string): string {
        if (const_val.length === 0)       this.throwURLError(const_val, "空文字です");
        const url_pattern = /^https:\/\/[ -~]+$/;
        if (!url_pattern.test(const_val)) this.throwURLError(const_val, "URL形式ではありません");
        return const_val;
    }

    throwURLError(error_value: string, message: string): void {
        throw new ValueObjectError<string>(error_value, this.model_name, this.class_name, message);
    }

    get value(): string {
        return this._value;
    }
}