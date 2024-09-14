"use client";
import { EditorSection } from "@components/ui";
import DataAccordion from "./DataAccordion";

const EditorSkills: React.FC = () => {
    return (
        <EditorSection
            id="skills"
            hedding="Skills"
        >
            <DataAccordion
                entity={null}
                onDelete={() => {}}
                onAdd={() => {}}
            />
        </EditorSection>
    )
}

export default EditorSkills;