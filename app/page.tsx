import { MainContent, Parallax, Header, About, HobbyLikes, Skills } from "@components/page";
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
                
            </MainContent>
        </>
    );
}
