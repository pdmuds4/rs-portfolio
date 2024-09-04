import { MainContent, Parallax, Header } from "@components/page";
import { About, HobbyLikes, Skills, Works, Qiita, Compose } from "@components/page";
import { HiddenDivider } from "@components/ui";

export default function Home() {
    return (
        <>  
            <Header />
            <Parallax />
            <MainContent>
                <About />
                <HiddenDivider />

                <HobbyLikes />
                <HiddenDivider />

                <Skills />
                <HiddenDivider />

                <Works />
                <HiddenDivider />

                <Qiita />
                <HiddenDivider />
                
                <Compose />
                <HiddenDivider />
                
            </MainContent>
        </>
    );
}
