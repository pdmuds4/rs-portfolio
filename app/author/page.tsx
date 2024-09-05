import { EditorContents, EditorHobbyLikes } from "@components/page";
import { HiddenDivider } from "@components/ui";

export default function Author () {
    return (
        <EditorContents>
            <EditorHobbyLikes />
            <HiddenDivider />
        </EditorContents>
    );
}