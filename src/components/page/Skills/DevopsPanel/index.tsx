"use client";
import SkillCard from "../SkillCard";
import SkillPanel from "../SkillPanel";

import { SkillsDTO } from "@models/entity/skills";

const DevopsPanel: React.FC<{
    value: string;
    data: SkillsDTO[];
}> = (props) => {
    return (
        <SkillPanel title={"~ DEVOPS ~"} value={props.value}>
            {props.data.map((item, index) => (
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