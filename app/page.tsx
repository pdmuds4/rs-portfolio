import { MainContent, Parallax, Header, About } from "@components/page";
import { Heading, Section } from "@components/ui";

export default function Home() {
    return (
        <>  
            <Header />
            <Parallax />
            <MainContent>
                <About />
            </MainContent>
        </>
    );
}
