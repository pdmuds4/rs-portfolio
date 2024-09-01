"use client";
import SkillCard from "../SkillCard";
import SkillPanel from "../SkillPanel";

const DevopsPanel: React.FC<{
    value: string;
}> = (props) => {
    const data = [
        {   
            title: "GitHub",
            symbol: "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
            progress: 8
        },
        {
            title: "VsCode",
            symbol: "https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg",
            progress: 7
        },
        {
            title: "Linux Cmd",
            symbol: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Terminalicon2.png",
            progress: 6
        },
        {
            title: "Docker",
            symbol: "https://icon.icepanel.io/Technology/png-shadow-512/Docker.png",
            progress: 5
        },
        {
            title: "Vercel",
            symbol: "https://icon.icepanel.io/Technology/png-shadow-512/Vercel.png",
            progress: 6
        },
        {
            title: "Render",
            symbol: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_611ad1bf7b895284e0851e42529395d7/render-render.png",
            progress: 5
        },
        {
            title: "AWS",
            symbol: "https://icon.icepanel.io/Technology/png-shadow-512/AWS.png",
            progress: 4
        }
        
    ]

    return (
        <SkillPanel title={"~ DEVOPS ~"} value={props.value}>
            {data.map((item, index) => (
                <SkillCard 
                    key={index}
                    color="warning"
                    symbol={item.symbol}
                    title={item.title}
                    progress={item.progress}
                />
            ))}
        </SkillPanel>
    )
}

export default DevopsPanel;