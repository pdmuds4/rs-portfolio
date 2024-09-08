import BaseValueObject from "@utils/abstruct/value_object";
import CustomError from "@utils/error";

class IsMinusError extends CustomError {
    status_code = 400;
    error_level = "ValueObject - ID";
    message     = "ID must be a positive number";
}

class IsFloatError extends CustomError {
    status_code = 400;
    error_level = "ValueObject - ID";
    message     = "ID must be an integer";
}

class IsNaNError extends CustomError {
    status_code = 400;
    error_level = "ValueObject - ID";
    message     = "ID must be not NaN";
}

export default class ID extends BaseValueObject<number> {
    validate(const_val: number): number {
        if (const_val < 0)                       throw IsMinusError;
        if (Math.floor(const_val) !== const_val) throw IsFloatError;
        if (isNaN(const_val))                    throw IsNaNError;
        return const_val;
    }
}