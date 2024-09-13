import Logger from "@utils/logger";

export default class BaseError extends Error {
    constructor(
        public status_code: number,
        public layer_level: 'ValueObject' | 'Entity' | 'Repository' | 'Service' | 'UseCase' | 'infrastructure',
        public model_name: string,
        public class_name: string,
        public message: string,
        public error_value: any,
    ) {
        super(message);
        Logger.error(`[${layer_level}/${model_name}/${class_name}] ${message}: 「${error_value}」`);
    }
}