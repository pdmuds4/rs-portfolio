import BaseID from "../baseid";

export default class ComposeID extends BaseID {
    constructor(value: number) {
        super(value, "Compose");
    }
}