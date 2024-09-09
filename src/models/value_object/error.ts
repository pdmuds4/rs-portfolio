import CustomError from "@utils/error";

export default class ValueObjectError<ValueT> extends CustomError {
    constructor(
        public model_name: string,
        public class_name: string,
        public message: string,
        public error_value: ValueT,
    ) {
        super(400, "ValueObject", model_name, class_name, message, error_value);
    }
}