import { Logger } from "./logger";

export default class CustomError extends Error {
    constructor(
        public status_code: number,
        public error_level: string,
        public message: string
    ) {
        super(message);
        Logger.error(message);
    }
}