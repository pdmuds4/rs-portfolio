"use client";
import { useState, useEffect } from "react";
import { Grid2 } from "@mui/material";
import { JsonAccordion, JsonProp } from "@components/ui"
import callAPI from "@utils/callApi";

import { useEventApi, useValidation } from "@components/hook";
import BaseError from "@utils/abstruct/error";
import { WorksDTO } from "@models/entity/works";
import { SkillsDTO } from "@models/entity/skills";
import { UploadDTO } from "@usecases/storage/uploadToS3";
import { DeleteDTO } from "@usecases/storage/deleteFromS3";
import { Title, Thumbnail, Description, Repository, Link, Status, Created } from "@models/value_object/works";

const DataAccordion: React.FC<{
    entity: WorksDTO,
    onUIDelete: () => void,
    onUIAdd: () => void,
    skills_data: SkillsDTO[],
}> = (props) => {
    const [entity, setEntity] = useState(props.entity);
    const [error, setError] = useState<BaseError|null>(null);

    const [isCreate, setIsCreate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const [upload_data, setUploadData] = useState<UploadDTO|null>(null);

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
                await callAPI<DeleteDTO, void>(
                    "DELETE",
                    "/api/works/thumbnail",
                    {file_url: entity.thumbnail}
                );
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

    const { eventHandler: uploadFile } = useEventApi(
        async () => {
            if (upload_data) {
                const response = await callAPI<UploadDTO, {thumbnail: string}>(
                    "POST",
                    "/api/works/thumbnail",
                    upload_data
                );
                if (response) onEditHandler(response);
            }
        }
    );

    const createUploadData = async (file: File) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        setUploadData({
            file_buffer: Array.from(buffer), 
            file_name: file.name,
        });
    };

    useEffect(() => {
        if (upload_data) uploadFile();
    }, [upload_data]);


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
                    onChange={(event) => createUploadData(event.target.files[0])}
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
                    onChange={(skill_id)=>onEditHandler({techs: [...entity.techs, skill_id]})}
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