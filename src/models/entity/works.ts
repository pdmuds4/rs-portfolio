import BaseEntity from "@utils/abstruct/entity";
import { WorksID, Title, Thumbnail, Description, Repository, Link, Status, Created } from "@models/value_object/works";
import { SkillsID } from "@models/value_object/skills";

export type WorksDTO = {
    id:          WorksID    ['_value'];
    title:       Title      ['_value'];
    thumbnail:   Thumbnail  ['_value'];
    description: Description['_value'];
    techs:       SkillsID   ['_value'][];
    repository:  Repository ['_value'];
    link:        Link       ['_value'];
    isprivate:   boolean;
    status:      Status     ['_value'];
    created:     Created    ['_value'];
}


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

export default class WorksEntity implements BaseEntity<WorksProps, WorksDTO>{
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
        id:         WorksID,
        title:      Title,
        thumbnail:  Thumbnail,
        description: Description,
        techs:      SkillsID[],
        repository: Repository,
        link:       Link,
        isprivate:  boolean,
        status:     Status,
        created:    Created
    ){
        this.id          = id;
        this.title       = title;
        this.thumbnail   = thumbnail;
        this.description = description;
        this.techs       = techs;
        this.repository  = repository;
        this.link        = link;
        this.isprivate   = isprivate;
        this.status      = status;
        this.created     = created;
    }

    toJson(): WorksDTO {
        return {
            id:          this.id.value,
            title:       this.title.value,
            thumbnail:   this.thumbnail.value,
            description: this.description.value,
            techs:       this.techs.map((tech) => tech.value),
            repository:  this.repository.value,
            link:        this.link.value,
            isprivate:   this.isprivate,
            status:      this.status.value,
            created:     this.created.value
        }
    }

    toObjectJson(): WorksProps {
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