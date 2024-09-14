import { MainContent, Parallax, Header } from "@components/page";
import { About, HobbyLikes, Skills, Works, Qiita, Compose } from "@components/page";
import { HiddenDivider } from "@components/ui";
import HomePageProvider from "@components/provider/HomePageProvider";

export default function Home() {
    return (
        <HomePageProvider>  
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
        </HomePageProvider>
    );
}
