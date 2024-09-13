import { EditorContents, EditorHobbyLikes, EditorSkills, EditorWorks, EditorCompose } from "@components/page";
import { HiddenDivider } from "@components/ui";
import AuthorContextProvider from "@components/provider/AuthorContextProvider";

export default function Author () {
    return (
        <AuthorContextProvider>
            <EditorContents>
                <EditorHobbyLikes />
                <HiddenDivider />

                <EditorSkills />
                <HiddenDivider />

                <EditorWorks />
                <HiddenDivider />

                <EditorCompose />
            </EditorContents>
        </AuthorContextProvider>
    );
}