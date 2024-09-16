"use client";
import { useState, useEffect } from "react";
import { Grid2 } from "@mui/material";
import { JsonAccordion, JsonProp } from "@components/ui"
import callAPI from "@utils/callApi";

import { useEventApi, useValidation } from "@components/hook";
import BaseError from "@utils/abstruct/error";
import { SkillsDTO } from "@models/entity/skills";
import { Title, Symbol, Progress, Category } from "@models/value_object/skills";

const DataAccordion: React.FC<{
    entity: SkillsDTO,
    onUIDelete: () => void,
    onUIAdd: () => void
}> = (props) => {
    const [entity, setEntity] = useState(props.entity);
    const [error, setError] = useState<BaseError|null>(null);

    const [isCreate, setIsCreate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    // バリデーションチェック
    useValidation(
        async () => {
            new Title(entity.title);
            new Symbol(entity.symbol);
            new Progress(entity.progress);
            new Category(entity.category);
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
                    "/api/skills?id=" + entity.id,
                );
            }
            props.onUIDelete();
        }
    );

    const {eventHandler: onServerSave } = useEventApi(
        async () => {
            if (!error && isEdit) {
                const response = await callAPI<SkillsDTO, SkillsDTO>(
                    "PUT",
                    "/api/skills",
                    entity
                );
                if (response?.id == entity.id) setIsEdit(false);

            } else if (!error && isCreate) {
                const response = await callAPI<SkillsDTO, SkillsDTO>(
                    "POST",
                    "/api/skills",
                    entity
                );
                if (response?.id) setIsCreate(false);
            }
        }
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
                    type="text"
                    label="title" 
                    value={entity.title} 
                    onChange={(event)=>onEditHandler({title: event.target.value})}
                    error={error?.class_name === "Title"}
                />
                <JsonProp 
                    key={2} 
                    type="text"
                    label="symbol"
                    value={entity.symbol} 
                    onChange={(event)=>onEditHandler({symbol: event.target.value})}
                    error={error?.class_name === "Symbol"}
                />
                <JsonProp 
                    key={3} 
                    type="number"
                    label="progress" 
                    value={entity.progress} 
                    onChange={(event)=>onEditHandler({progress: Number(event.target.value)})}
                />
                <JsonProp 
                    key={4} 
                    type="select" 
                    label="category"
                    value={entity.category} 
                    onChange={(event)=>onEditHandler({category: event.target.value})}
                />
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;