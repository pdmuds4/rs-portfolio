import { Logger } from "./logger";

export default class CustomError extends Error {
    constructor(
        public status_code: number,
        public layer_level: 'ValueObject' | 'Entity' | 'Repository' | 'Service' | 'UseCase',
        public model_name: string,
        public class_name: string,
        public message: string,
        public error_value: any,
    ) {
        super(message);
        Logger.error(`${message} -> 「${error_value}」: ${layer_level}/${model_name}/${class_name}`);
    }
}