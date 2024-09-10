import BaseEntity from "@utils/abstruct/entity";
import { SkillsID, Title, Symbol, Progress, Category } from "@models/value_object/skills";

export interface SkillsProps {
    id:       SkillsID;
    title:    Title;
    symbol:   Symbol;
    progress: Progress;
    category: Category;
}

export default class SkillsEntity implements BaseEntity<SkillsProps>{
    readonly     id: SkillsID;
    public    title: Title;
    public   symbol: Symbol;
    public progress: Progress;
    public category: Category;

    constructor(
        props: SkillsProps
    ){
        this.id     = props.id;
        this.title  = props.title;
        this.symbol  = props.symbol;
        this.progress = props.progress;
        this.category = props.category;
    }

    json(): SkillsProps {
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