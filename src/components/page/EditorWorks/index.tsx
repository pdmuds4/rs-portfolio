"use client";
import { useState } from "react";
import { EditorSection } from "@components/ui";
import DataAccordion from "./DataAccordion";

import callAPI from "@utils/callApi";
import { useRenderApi } from "@components/hook";
import { WorksDTO } from "@models/entity/works";
import { SkillsDTO } from "@models/entity/skills";

const EditorWorks: React.FC = () => {
    const [data, setData] = useState<WorksDTO[]>([]);
    const [skills_data, setSkillsData] = useState<SkillsDTO[]>([]);

    useRenderApi<WorksDTO[]>(
        async () => {
            const response = await callAPI<null, WorksDTO[]>(
                "GET",
                "/api/works"
            );
            return response;
        },
        setData
    );

    useRenderApi<SkillsDTO[]>(
        async () => {
            const response = await callAPI<null, SkillsDTO[]>(
                "GET",
                "/api/skills"
            );
            return response;
        },
        setSkillsData
    );

    const deleteHandler = (id: number) => {
        setData(data.filter((work) => work.id !== id));
    };

    const addHandler = (index: number) => {
        setData([
            ...data.slice(0, index + 1),
            {
                id: data.map((work) => work.id).reduce((a, b) => Math.max(a, b)) + 1,
                title: "",
                thumbnail: "",
                description: "",
                techs: [],
                repository: "",
                link: null,
                isprivate: false,
                status: 0,
                created: new Date()
            },
            ...data.slice(index + 1)
        ]);
    }


    return (
        <EditorSection
            id="works"
            hedding="Works"
        >
            {data.map((skill, index)=>(
                <DataAccordion
                    key={skill.id}
                    entity={skill}
                    onUIDelete={() => deleteHandler(skill.id)}
                    onUIAdd={() => addHandler(index)}
                    skills_data={skills_data}
                />
            ))}
        </EditorSection>
    )
}

export default EditorWorks;