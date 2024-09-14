"use client";
import { useState, useEffect } from "react";
import { Grid2 } from "@mui/material";
import { JsonAccordion, JsonProp } from "@components/ui"
import callAPI from "@utils/callApi";

import { useEventApi, useValidation } from "@components/hook";
import BaseError from "@utils/abstruct/error";
import { ComposeDTO } from "@models/entity/compose";
import { UploadDTO } from "@usecases/storage/uploadToS3";
import { Title, Artwork, Genre, Audio, YoutubeUrl, SoundcloudUrl, XUrl } from "@models/value_object/compose";

const DataAccordion: React.FC<{
    entity: ComposeDTO,
    onUIDelete: () => void,
    onUIAdd: () => void
}> = (props) => {
    const [entity, setEntity] = useState(props.entity);
    const [error, setError] = useState<BaseError|null>(null);

    const [isCreate, setIsCreate] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const [upload_artwork, setUploadArtWork] = useState<UploadDTO|null>(null);
    const [upload_audio, setUploadAudio] = useState<UploadDTO|null>(null);

    // バリデーションチェック
    useValidation(
        async () => {
            new Title(entity.title);
            new Artwork(entity.artwork);
            new Genre(entity.genre);
            new Audio(entity.audio);
            new YoutubeUrl(entity.youtube);
            new SoundcloudUrl(entity.soundcloud);
            new XUrl(entity.x);
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
    };

    // サーバー通信
    const {eventHandler: onServerDelete } = useEventApi(
        async () => {
            if (!error) {
                await callAPI<null, void>(
                    "DELETE",
                    `/api/compose/${entity.id}`
                );
            }
            props.onUIDelete();
        }    
    );

    const {eventHandler: onServerSave } = useEventApi(
        async () => {
            if (!error && isEdit) {
                const response = await callAPI<ComposeDTO, ComposeDTO>(
                    "PUT",
                    "/api/compose",
                    entity
                );
                if (response?.id == entity.id) setIsEdit(false);

            } else if (!error && isCreate) {
                const response = await callAPI<ComposeDTO, ComposeDTO>(
                    "POST",
                    "/api/compose",
                    entity
                );
                if (response?.id) setIsCreate(false);
            }
        }
    );

    // S3へのアップロード
    const { eventHandler: uploadArtWork } = useEventApi(
        async () => {
            if (upload_artwork) {
                const response = await callAPI<UploadDTO, {artwork: string}>(
                    "POST",
                    "/api/compose/artwork",
                    upload_artwork
                );
                if (response) onEditHandler(response);
            }
        }
    );

    const { eventHandler: uploadAudio } = useEventApi(
        async () => {
            if (upload_audio) {
                const response = await callAPI<UploadDTO, {audio: string}>(
                    "POST",
                    "/api/compose/audio",
                    upload_audio
                );
                if (response) onEditHandler(response);
            }
        }
    );


    const createUploadData = async (file: File, setter: (v: UploadDTO)=>void) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        setter({
            file_buffer: Array.from(buffer), 
            file_name: file.name,
        });
    };

    useEffect(() => {
        if (upload_artwork) uploadArtWork();
        if (upload_audio) uploadAudio();
    }, [upload_artwork, upload_audio]);


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
                    label="artwork" 
                    type="imgfile" 
                    value={entity.artwork}
                    onChange={(event)=>createUploadData(event.target.files[0], setUploadArtWork)}
                    error={error?.class_name === "Artwork"}
                />
                <JsonProp 
                    key={3} 
                    label="genre" 
                    type="text" 
                    value={entity.genre}
                    onChange={(event)=>onEditHandler({genre: event.target.value})}
                    error={error?.class_name === "Genre"}
                />
                <JsonProp 
                    key={4} 
                    label="audio" 
                    type="audiofile" 
                    value={entity.audio}
                    onChange={(event)=>createUploadData(event.target.files[0], setUploadAudio)}
                    error={error?.class_name === "Audio"}
                />
                <JsonProp 
                    key={5} 
                    label="youtube url" 
                    type="text" 
                    value={entity.youtube}
                    onChange={(event)=>onEditHandler({youtube: event.target.value})}
                    error={error?.class_name === "YoutubeUrl"}
                />
                <JsonProp 
                    key={6} 
                    label="soundcloud url" 
                    type="text" 
                    value={entity.soundcloud}
                    onChange={(event)=>onEditHandler({soundcloud: event.target.value})}
                    error={error?.class_name === "SoundcloudUrl"}
                />
                <JsonProp 
                    key={7} 
                    label="x url" 
                    type="text" 
                    value={entity.x}
                    onChange={(event)=>onEditHandler({x: event.target.value})}
                    error={error?.class_name === "XUrl"}
                />
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;