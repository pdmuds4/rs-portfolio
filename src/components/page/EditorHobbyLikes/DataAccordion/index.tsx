"use client";
import { useEffect, useState } from "react";
import { Grid2 } from "@mui/material";
import { JsonAccordion, JsonProp } from "@components/ui"
import callAPI from "@utils/callApi";

import { useEventApi, useValidation } from "@components/hook";
import BaseError from "@utils/abstruct/error";
import { HobbyLikesDTO } from "@models/entity/hobbylikes";
import { Title, Panel, Detail } from "@models/value_object/hobbylikes";

const DataAccordion: React.FC<{
    entity: HobbyLikesDTO,
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
            new Panel(entity.panel);
            new Detail(entity.detail);
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
                    "/api/hobbylikes?id=" + entity.id,
                );
            }
            props.onUIDelete();
        }
    );

    const {eventHandler: onServerSave } = useEventApi(
        async () => {
            if (!error && isEdit) {
                const response = await callAPI<HobbyLikesDTO, HobbyLikesDTO>(
                    "PUT",
                    "/api/hobbylikes",
                    entity
                );
                if (response?.id == entity.id) setIsEdit(false);

            } else if (!error && isCreate) {
                const response = await callAPI<HobbyLikesDTO, HobbyLikesDTO>(
                    "POST",
                    "/api/hobbylikes",
                    entity
                );
                if (response?.id == entity.id) setIsCreate(false);
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
                    value={props.entity.title}
                    onChange={(event) => onEditHandler({title: event.target.value})}
                    error={error?.class_name === "Title"}
                />
                <JsonProp 
                    key={2} 
                    type="text" 
                    label="panel" 
                    value={props.entity.panel} 
                    onChange={(event) => onEditHandler({panel: event.target.value})}
                    error={error?.class_name === "Panel"}
                />
                <JsonProp 
                    key={3} 
                    type="textarea" 
                    label="detail" 
                    value={props.entity.detail}
                    onChange={(event) => onEditHandler({detail: event.target.value})}
                    error={error?.class_name === "Detail"}
                />
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;