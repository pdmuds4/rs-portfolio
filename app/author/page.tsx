import { EditorContents, EditorHobbyLikes, EditorSkills, EditorWorks, EditorCompose } from "@components/page";
import { HiddenDivider } from "@components/ui";

export default function Author () {
    return (
        <EditorContents>
            <EditorHobbyLikes />
            <HiddenDivider />

            <EditorSkills />
            <HiddenDivider />

            <EditorWorks />
            <HiddenDivider />

            <EditorCompose />
        </EditorContents>
    );
}