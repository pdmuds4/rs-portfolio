"use client";
import { SkillCard, SkillPanel } from "@components/ui";

const BackendPanel: React.FC<{
    value: string;
}> = (props) => {
    const data = [
        {   
            title: "Python",
            symbol: "https://cdn.iconscout.com/icon/free/png-512/free-python-2038870-1720083.png?f=webp&w=512",
            progress: 8
        },
        {
            title: "TypeScript",
            symbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png",
            progress: 7
        },
        {
            title: "Flask",
            symbol: "https://icon.icepanel.io/Technology/png-shadow-512/Flask.png",
            progress: 5
        },
        {
            title: "FastAPI",
            symbol: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
            progress: 7
        },
        {
            title: "Express",
            symbol: "https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=webp&w=512",
            progress: 4
        },
        {
            title: "Next.js",
            symbol: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
            progress: 6
        },
        {
            title: "Nuxt.js",
            symbol: "https://nuxt.com/assets/design-kit/icon-green.svg",
            progress: 2
        },
    ]

    return (
        <SkillPanel title={"~ BACKEND ~"} value={props.value}>
            {data.map((item, index) => (
                <SkillCard 
                    key={index}
                    color="success"
                    symbol={item.symbol}
                    title={item.title}
                    progress={item.progress}
                />
            ))}
        </SkillPanel>
    )
}

export default BackendPanel;