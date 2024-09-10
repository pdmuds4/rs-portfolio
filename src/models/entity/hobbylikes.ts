import BaseEntity from "@utils/abstruct/entity";
import { HobbyLikesID, Title, Panel, Detail } from "@models/value_object/hobbylikes";

export interface HobbyLikesProps {
    id:     HobbyLikesID;
    title:  Title;
    panel:  Panel;
    detail: Detail;
}

export default class HobbyLikesEntity implements BaseEntity<HobbyLikesProps>{
    readonly   id: HobbyLikesID;
    public  title: Title;
    public  panel: Panel;
    public detail: Detail;

    constructor(
        props: HobbyLikesProps
    ){
        this.id     = props.id;
        this.title  = props.title;
        this.panel  = props.panel;
        this.detail = props.detail;
    }

    json(): HobbyLikesProps {
        return {
            id:     this.id,
            title:  this.title,
            panel:  this.panel,
            detail: this.detail
        }
    }

    equals(other: HobbyLikesEntity): boolean {
        return this.id === other.id;
    }
}