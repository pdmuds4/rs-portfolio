import BaseValueObject from "@utils/abstruct/value_object";

type CategoryEnum = {
    E_FRONT: "frontend",
    E_BACK: "backend",
    E_DB: "database",
    E_DEV: "devops",
}

type CategoryLiteral = CategoryEnum[keyof CategoryEnum];

// class CategoryError extends ValueObjectError<CategoryLiteral> {
//     constructor(
//         public error_value: CategoryLiteral,
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

export default class Category extends BaseValueObject<CategoryLiteral> {
    validate(const_val: CategoryLiteral): CategoryLiteral {
        return const_val;
    }
}