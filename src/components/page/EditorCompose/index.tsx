"use client";
import { useState } from "react";
import { EditorSection } from "@components/ui";
import DataAccordion from "./DataAccordion";

import callAPI from "@utils/callApi";
import { useRenderApi } from "@components/hook";
import { ComposeDTO } from "@models/entity/compose";

const EditorCompose: React.FC = () => {
    const [data, setData] = useState<ComposeDTO[]>([]);

    useRenderApi<ComposeDTO[]>(
        async () => {
            const response = await callAPI<null, ComposeDTO[]>(
                "GET",
                "/api/compose"
            );
            return response;
        },
        setData
    );

    const deleteHandler = (id: number) => {
        setData(data.filter((compose) => compose.id !== id));
    };

    const addHandler = (index: number) => {
        setData([
            ...data.slice(0, index + 1),
            {
                id: data.map((compose) => compose.id).reduce((a, b) => Math.max(a, b)) + 1,
                title: "",
                artwork: "",
                genre: "",
                audio: "",
                youtube: "",
                soundcloud: "",
                x: "",
            },
            ...data.slice(index + 1)
        ]);
    }




    return (
        <EditorSection
            id="compose"
            hedding="Compose"
        >
            {data.map((compose, index)=>(
                <DataAccordion
                    key={compose.id}
                    entity={compose}
                    onUIDelete={() => deleteHandler(compose.id)}
                    onUIAdd={() => addHandler(index)}
                />
            ))}
        </EditorSection>
    )
}

export default EditorCompose;