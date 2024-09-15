"use client";
import { useState } from "react";
import { EditorSection } from "@components/ui";
import DataAccordion from "./DataAccordion";

import callAPI from "@utils/callApi";
import { useRenderApi } from "@components/hook";
import { SkillsDTO } from "@models/entity/skills";

const EditorSkills: React.FC = () => {
    const [data, setData] = useState<SkillsDTO[]>([]);

    useRenderApi<SkillsDTO[]>(
        async () => {
            const response = await callAPI<null, SkillsDTO[]>(
                "GET",
                "/api/skills"
            );
            return response;
        },
        setData
    );

    const deleteHandler = (id: number) => {
        setData(data.filter((skill) => skill.id !== id));
    };

    const addHandler = (index: number) => {
        setData([
            ...data.slice(0, index + 1),
            {
                id: data.map((skill) => skill.id).reduce((a, b) => Math.max(a, b)) + 1,
                title: "",
                symbol: "",
                progress: 1,
                category: "frontend"
            },
            ...data.slice(index + 1)
        ]);
    }


    return (
        <EditorSection
            id="skills"
            hedding="Skills"
        >
        {data.map((skill, index)=>(
            <DataAccordion
                key={skill.id}
                entity={skill}
                onUIDelete={() => deleteHandler(skill.id)}
                onUIAdd={() => addHandler(index)}
            />
        ))}
        </EditorSection>
    )
}

export default EditorSkills;