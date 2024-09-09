import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "../error";

// 0: 未公開, 1: 公開中, 2: 再開発中, 3: 停止中
export type StatusEnum = {
    E_UnDeployed: 0,
    E_Deployed: 1,
    E_Refactoring: 2,
    E_Stopped: 3,
}

export type StatusLiteral = StatusEnum[keyof StatusEnum];

// class StatusError extends ValueObjectError<StatusLiteral> {
//     constructor(
//         public error_value: StatusLiteral,
//         public message: string
//     ) {
//         super(
//             error_value,
//             "Skills",
//             "Progress",
//             message,
//         );
//     }
// }

export default class Status extends BaseValueObject<StatusLiteral> {
    validate(const_val: StatusLiteral): StatusLiteral {
        return const_val;
    }
}