"use client";
import { EditorSection } from "@components/ui";
import DataAccordion from "./DataAccordion";

const EditorCompose: React.FC = () => {
    return (
        <EditorSection
            id="compose"
            hedding="Compose"
        >
            <DataAccordion
                entity={null}
                onDelete={() => {}}
                onAdd={() => {}}
            />
        </EditorSection>
    )
}

export default EditorCompose;