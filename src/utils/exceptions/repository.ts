import BaseError from "@utils/abstruct/error";

export default class RepositoryError<ValueT> extends BaseError {
    constructor(
        public status_code: number,
        public error_value: ValueT,
        public model_name: string,
        public class_name: string,
        public message: string
    ) {
        super(status_code, "Repository", model_name, class_name, message, error_value);
    }
}