import BaseEntity from "@utils/abstruct/entity";
import { WorksID, Title, Thumbnail, Description, Repository, Link, Status, Created } from "@models/value_object/works";
import { SkillsID } from "@models/value_object/skills";

export interface WorksProps {
    id:          WorksID;
    title:       Title;
    thumbnail:   Thumbnail;
    description: Description;
    techs:       SkillsID[];
    repository:  Repository;
    link:        Link;
    isprivate:   boolean;
    status:      Status;
    created:     Created;
}

export default class WorksEntity implements BaseEntity<WorksProps>{
    readonly        id: SkillsID;
    public       title: Title;
    public   thumbnail: Thumbnail;
    public description: Description;
    public       techs: SkillsID[];
    public  repository: Repository;
    public        link: Link;
    public   isprivate: boolean;
    public      status: Status;
    public     created: Created;

    constructor(
        props: WorksProps
    ){
        this.id          = props.id;
        this.title       = props.title;
        this.thumbnail   = props.thumbnail;
        this.description = props.description;
        this.techs       = props.techs;
        this.repository  = props.repository;
        this.link        = props.link;
        this.isprivate   = props.isprivate;
        this.status      = props.status;
        this.created     = props.created;
    }

    json(): WorksProps {
        return {
            id:          this.id,
            title:       this.title,
            thumbnail:   this.thumbnail,
            description: this.description,
            techs:       this.techs,
            repository:  this.repository,
            link:        this.link,
            isprivate:   this.isprivate,
            status:      this.status,
            created:     this.created
        }
    }

    equals(other: WorksEntity): boolean {
        return this.id === other.id;
    }
}