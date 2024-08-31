"use client";
import { SkillCard, SkillPanel } from "@components/ui";

const DatabasePanel: React.FC<{
    value: string;
}> = (props) => {
    const data = [
        {   
            title: "PostgreSQL",
            symbol: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
            progress: 6
        },
        {
            title: "SQLite",
            symbol: "https://icon.icepanel.io/Technology/png-shadow-512/SQLite.png",
            progress: 5
        },
        {
            title: "AWS DynamoDB",
            symbol: "https://hackers-high.com/images/eyecatch-dynamodb-icon.jpg",
            progress: 4
        },
        {
            title: "Supabase",
            symbol: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
            progress: 6
        },
        {
            title: "Prisma",
            symbol: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4",
            progress: 5
        },
        {
            title: "SQLAlchemy",
            symbol: "https://icon.icepanel.io/Technology/png-shadow-512/SQLAlchemy.png",
            progress: 1
        }
    ]

    return (
        <SkillPanel title={"~ DATABASE ~"} value={props.value}>
            {data.map((item, index) => (
                <SkillCard 
                    key={index}
                    color="secondary"
                    symbol={item.symbol}
                    title={item.title}
                    progress={item.progress}
                />
            ))}
        </SkillPanel>
    )
}

export default DatabasePanel;