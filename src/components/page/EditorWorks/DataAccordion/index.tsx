"use client";
import { useState, useEffect, useContext } from "react";
import { Grid2 } from "@mui/material";
import { JsonAccordion, JsonProp } from "@components/ui"
import callAPI from "@utils/callApi";
import { Context } from "@components/provider/AuthorContextProvider";

import { useEventApi, useValidation, useS3 } from "@components/hook";
import BaseError from "@utils/abstruct/error";
import { WorksDTO } from "@models/entity/works";
import { SkillsDTO } from "@models/entity/skills";
import { Title, Thumbnail, Description, Repository, Link, Status, Created } from "@models/value_object/works";
import { UploadThumbnailUseCase, DeleteThumbnailUseCase } from "@usecases/works";

const DataAccordion: React.FC<{
    entity: WorksDTO,
    onUIDelete: () => void,
    onUIAdd: () => void,
    skills_data: SkillsDTO[],
}> = (props) => {
    const { s3Client } = useContext(Context);
    const [entity, setEntity] = useState(props.entity);
    const [error, setError] = useState<BaseError|null>(null);

    const [isCreate, setIsCreate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);


    // バリデーションチェック
    useValidation(
        async () => {
            new Title(entity.title);
            new Thumbnail(entity.thumbnail);
            new Description(entity.description);
            new Repository(entity.repository);
            if (entity.link) new Link(entity.link);
            new Status(entity.status);
            new Created(entity.created);
        },
        [entity],
        setError
    );

    // 新規作成時/編集時の判定
    useEffect(() => {
        if (props.entity.title === "") {
            setIsCreate(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entity]);

    const onEditHandler = (property: any) => {
        if (!isCreate) setIsEdit(true);
        setEntity({...entity, ...property});
    }

    // サーバー通信
    const {eventHandler: onServerDelete } = useEventApi(
        async () => {
            if (!error) {
                await callAPI<null, void>(
                    "DELETE",
                    "/api/works?id=" + entity.id,
                );
                // S3からの削除
                deleteThumbnail(entity.thumbnail);
            }
            props.onUIDelete();
        }
    );

    const {eventHandler: onServerSave } = useEventApi(
        async () => {
            if (!error && isEdit) {
                const response = await callAPI<WorksDTO, WorksDTO>(
                    "PUT",
                    "/api/works",
                    entity
                );
                if (response?.id == entity.id) setIsEdit(false);

            } else if (!error && isCreate) {
                const response = await callAPI<WorksDTO, WorksDTO>(
                    "POST",
                    "/api/works",
                    entity
                );
                if (response?.id) setIsCreate(false);
            }
        }
    );

    // S3へのアップロード
    const { eventHandler: uploadThumbnail } = useS3(
        async (client, request) => {
            const usecase = new UploadThumbnailUseCase(client, request as File);
            const response = await usecase.execute();
            onEditHandler(response);
        },
        s3Client
    );

    const { eventHandler: deleteThumbnail } = useS3(
        async (client, request) => {
            const usecase = new DeleteThumbnailUseCase(client, entity.thumbnail);
            await usecase.execute();
            onEditHandler({thumbnail: ""});
        },
        s3Client
    );

    return (
        <JsonAccordion
            title=
            {
                `${props.entity.id.toString()}: ${props.entity.title}
                ${isEdit || isCreate ? " *" : ""}
                ${error ? " ※Error" : ""}`
            }
            onDelete={()=>{onServerDelete()}}
            onAdd   ={props.onUIAdd}
            onClosed={()=>{if (isEdit || isCreate) onServerSave()}}
        >   
            <Grid2 container spacing={2}>
                <JsonProp 
                    key={1} 
                    label="title" 
                    type="text" 
                    value={entity.title}
                    onChange={(event)=>onEditHandler({title: event.target.value})}
                    error={error?.class_name === "Title"}
                />
                <JsonProp 
                    key={2} 
                    label="thumnail" 
                    type="imgfile"
                    value={entity.thumbnail}
                    onChange={(event) => uploadThumbnail(event.target.files[0])}
                    onDelete={(event) => deleteThumbnail(entity.thumbnail)}
                    error={error?.class_name === "Thumbnail"}
                />
                <JsonProp 
                    key={3} 
                    label="description" 
                    type="textarea" 
                    value={entity.description}
                    onChange={(event)=>onEditHandler({description: event.target.value})}
                    error={error?.class_name === "Description"}
                />
                <JsonProp 
                    key={4} 
                    label="techs" 
                    type="array" 
                    value={entity.techs}
                    onChange={(skill_id)=>{
                        if (entity.techs.includes(skill_id)) {
                            onEditHandler({techs: entity.techs.filter((id)=>id !== skill_id)});
                        } else {
                            onEditHandler({techs: [...entity.techs, skill_id]});
                        }
                    }}
                    skills_data={props.skills_data}
                />
                <JsonProp 
                    key={5} 
                    label="repository" 
                    type="text" 
                    value={entity.repository}
                    onChange={(event)=>onEditHandler({repository: event.target.value})}
                    error={error?.class_name === "Repository"}
                />
                <JsonProp 
                    key={6} 
                    label="link" 
                    type="text" 
                    value={entity.link || ""}
                    onChange={(event)=>onEditHandler({link: event.target.value})}
                    error={error?.class_name === "Link"}
                />
                <JsonProp 
                    key={7} 
                    label="isprivate" 
                    type="boolean" 
                    value={entity.isprivate}
                    onChange={(value)=>onEditHandler({isprivate: value})}
                />
                <JsonProp 
                    key={8} 
                    label="status" 
                    type="select" 
                    value={entity.status}
                    onChange={(event)=>onEditHandler({status: event.target.value})}
                    error={error?.class_name === "Status"}
                />
                <JsonProp 
                    key={9} 
                    label="created"
                    type="date" 
                    value={new Date(entity.created)}
                    onChange={(event)=>onEditHandler({created: new Date(event.target.value)})}
                    error={error?.class_name === "Created"}
                />
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;