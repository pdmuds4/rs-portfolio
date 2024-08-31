"use client";
import { SkillCard, SkillPanel } from "@components/ui";

const FrontendPanel: React.FC<{
    value: string;
}> = (props) => {
    const data = [
        {   
            title: "HTML",
            symbol: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
            progress: 7
        },
        {
            title: "CSS",
            symbol: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
            progress: 5
        },
        {
            title: "JavaScript",
            symbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/288px-Unofficial_JavaScript_logo_2.svg.png",
            progress: 6
        },
        {
            title: "TypeScript",
            symbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png",
            progress: 6
        },
        {
            title: "React",
            symbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png",
            progress: 8
        },
        {
            title: "Vue",
            symbol: "https://v2.ja.vuejs.org/images/logo.svg",
            progress: 4
        },
        {
            title: "Vite",
            symbol: "https://vitejs.dev/logo.svg",
            progress: 4
        }
    ]

    return (
        <SkillPanel value={props.value} title={"~ FRONTEND ~"}>
            {data.map((item, index) => (
                <SkillCard 
                    key={index}
                    color="primary"
                    symbol={item.symbol}
                    title={item.title}
                    progress={item.progress}
                />
            ))}
        </SkillPanel>
    )
}

export default FrontendPanel;