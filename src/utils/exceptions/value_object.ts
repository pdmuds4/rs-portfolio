import BaseError from "@utils/abstruct/error";

export default class ValueObjectError<ValueT> extends BaseError {
    constructor(
        public error_value: ValueT,
        public model_name: string,
        public class_name: string,
        public message: string
    ) {
        super(400, "ValueObject", model_name, class_name, message, error_value);
    }
}