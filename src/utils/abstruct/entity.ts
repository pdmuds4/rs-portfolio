export default interface BaseEntity<EntityJson, EntityDTO> {
    toJson(): EntityDTO;
    toObjectJson(): EntityJson;
    equals(entity: BaseEntity<EntityJson, EntityDTO>): boolean;
}