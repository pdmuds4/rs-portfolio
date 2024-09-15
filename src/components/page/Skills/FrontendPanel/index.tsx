"use client";
import SkillCard from "../SkillCard";
import SkillPanel from "../SkillPanel";

import { SkillsDTO } from "@models/entity/skills";

const FrontendPanel: React.FC<{
    value: string;
    data: SkillsDTO[];
}> = (props) => {

    return (
        <SkillPanel value={props.value} title={"~ FRONTEND ~"}>
            {props.data.map((item, index) => (
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