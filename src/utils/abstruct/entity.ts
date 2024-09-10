export default interface BaseEntity<EntityJson> {
    json(): EntityJson;
    equals(entity: BaseEntity<EntityJson>): boolean;
}