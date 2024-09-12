"use client";
import { EditorSection } from "@components/ui";
import DataAccordion from "./DataAccordion";

const EditorWorks: React.FC = () => {
    return (
        <EditorSection
            id="works"
            hedding="Works"
        >
            <DataAccordion
                entity={null}
                onDelete={() => {}}
                onAdd={() => {}}
            />
        </EditorSection>
    )
}

export default EditorWorks;