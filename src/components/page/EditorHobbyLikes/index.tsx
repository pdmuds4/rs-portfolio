"use client";
import { EditorSection } from "@components/ui";
import DataAccordion from "./DataAcordion";

const EditorHobbyLikes: React.FC = () => {
    return (
        <EditorSection
            id="hobbylikes"
            hedding="Hobby & Likes"
        >
            <DataAccordion
                entity={null}
                onDelete={() => {}}
                onAdd={() => {}}
            />
        </EditorSection>
    )
}

export default EditorHobbyLikes;