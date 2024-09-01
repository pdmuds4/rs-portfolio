import { MainContent, Parallax, Header, About, HobbyLikes, Career, Skills, Works } from "@components/page";
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

                <Career />
                <HiddenDivider />

                <Skills />
                <HiddenDivider />

                <Works />
                <HiddenDivider />
                
            </MainContent>
        </>
    );
}
