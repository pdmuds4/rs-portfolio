import BaseEntity from "@utils/abstruct/entity";
import { SkillsID, Title, Symbol, Progress, Category } from "@models/value_object/skills";

export type SkillsDTO = {
    id:       SkillsID    ["_value"];
    title:    Title       ["_value"];
    symbol:   Symbol      ["_value"];
    progress: Progress    ["_value"];
    category: Category    ["_value"];
}

export interface SkillsProps {
    id:       SkillsID;
    title:    Title;
    symbol:   Symbol;
    progress: Progress;
    category: Category;
}

export default class SkillsEntity implements BaseEntity<SkillsProps, SkillsDTO>{
    readonly     id: SkillsID;
    public    title: Title;
    public   symbol: Symbol;
    public progress: Progress;
    public category: Category;

    constructor(
        id:       SkillsID,
        title:    Title,
        symbol:   Symbol,
        progress: Progress,
        category: Category
    ){
        this.id       = id;
        this.title    = title;
        this.symbol   = symbol;
        this.progress = progress;
        this.category = category;
    }

    toJson(): SkillsDTO {
        return {
            id:       this.id.value,
            title:    this.title.value,
            symbol:   this.symbol.value,
            progress: this.progress.value,
            category: this.category.value
        }
    }

    toObjectJson(): SkillsProps {
        return {
            id:     this.id,
            title:  this.title,
            symbol:  this.symbol,
            progress: this.progress,
            category: this.category
        }
    }

    equals(other: SkillsEntity): boolean {
        return this.id === other.id;
    }
}