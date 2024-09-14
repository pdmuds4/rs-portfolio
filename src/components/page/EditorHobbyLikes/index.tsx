"use client";
import { useState } from "react";
import { EditorSection } from "@components/ui";
import DataAccordion from "./DataAccordion";

import callAPI from "@utils/callApi";
import { useRenderApi } from "@components/hook";
import { HobbyLikesDTO } from "@models/entity/hobbylikes";

const EditorHobbyLikes: React.FC = () => {
    const [data, setData] = useState<HobbyLikesDTO[]>([]);

    useRenderApi<HobbyLikesDTO[]>(
        async () => {
            const response = await callAPI<null, HobbyLikesDTO[]>(
                "GET",
                "/api/hobbylikes"
            );
            return response;
        },
        setData
    );

    function deleteHandler(id: number) {
        setData(data.filter((hobbylikes) => hobbylikes.id !== id));
    };

    const addHandler = (index: number) => {
        setData([
            ...data.slice(0, index + 1),
            {
                id: data.map((hobbylikes) => hobbylikes.id).reduce((a, b) => Math.max(a, b)) + 1,
                title: "",
                panel: "",
                detail: ""
            },
            ...data.slice(index + 1)
        ]);
    }


    return (
        <EditorSection
            id="hobbylikes"
            hedding="Hobby & Likes"
        >   
        {data.map((hobbylikes, index)=>(
            <DataAccordion
                key={hobbylikes.id}
                entity={hobbylikes}
                onUIDelete={()=>deleteHandler(hobbylikes.id)}
                onUIAdd={() => addHandler(index)}
            />
        ))}
        </EditorSection>
    )
}

export default EditorHobbyLikes;