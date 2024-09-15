import BaseEntity from "@utils/abstruct/entity";
import { HobbyLikesID, Title, Panel, Detail } from "@models/value_object/hobbylikes";

export type HobbyLikesDTO = {
    id:     HobbyLikesID["_value"];
    title:  Title       ["_value"];
    panel:  Panel       ["_value"];
    detail: Detail      ["_value"];
}


export interface HobbyLikesProps {
    id:     HobbyLikesID;
    title:  Title;
    panel:  Panel;
    detail: Detail;
}

export default class HobbyLikesEntity implements BaseEntity<HobbyLikesProps, HobbyLikesDTO>{
    readonly   id: HobbyLikesID;
    public  title: Title;
    public  panel: Panel;
    public detail: Detail;

    constructor(
        id:     HobbyLikesID,
        title:  Title,
        panel:  Panel,
        detail: Detail
    ){
        this.id     = id;
        this.title  = title;
        this.panel  = panel;
        this.detail = detail;
    }

    toJson(): HobbyLikesDTO {
        return {
            id:     this.id.value,
            title:  this.title.value,
            panel:  this.panel.value,
            detail: this.detail.value
        }
    }

    toObjectJson(): HobbyLikesProps {
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