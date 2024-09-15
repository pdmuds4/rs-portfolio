"use client";
import { useState, useEffect } from "react";
import { Divider, Card, Grid2, Box } from "@mui/material"
import * as styles from "./style";
import { Section, Heading } from "@components/ui"

import DevelopCard from "./DevelopCard";
import DevelopPanel from "./DevelopPanel";

import formatDate from "@utils/formatDate";
import { WorksDTO } from "@models/entity/works";
import { SkillsDTO } from "@models/entity/skills";
import { useGetterApi } from "@components/hook";

const Works: React.FC = () => {
    const [data, setData] = useState<WorksDTO[]>([]);
    useGetterApi<WorksDTO[]>("/api/works", setData);

    const [techs_data, setTechsData] = useState<SkillsDTO[]>([]);
    useGetterApi<SkillsDTO[]>("/api/skills", setTechsData);

    const [panelApp, setPanelApp] = useState<WorksDTO|null>(null);
    useEffect(() => {if(data) setPanelApp(data[0])}, [data]);
    
    return (
        <Section id="works">
            <Heading>
                Works
            </Heading>
            <Divider />
            <Card sx={styles.card_body}>
                <Grid2 container spacing={{xs: 0, md: 3}}>
                    <Grid2 size={{xs: 12, md: 5}} sx={styles.carousel_wrapper}>
                        <Box sx={styles.cards_carousel}>
                            <Box height={{xs: 5, md: 10}} />
                        {data.slice().sort((a, b) => a.created < b.created ? 1 : -1)
                        .map((item, index) => (
                            <DevelopCard 
                                key={index}
                                title={item.title}
                                thumbnail={item.thumbnail}
                                created={formatDate(new Date(item.created))}
                                changePanel={() => setPanelApp(item)}
                            />
                        ))}
                            <Box height={{xs: 5, md: 10}} />
                        </Box>
                    </Grid2>
                    <Grid2 size={{xs: 12, md: 7}} p={{xs: "10px 0", md: "20px 0"}}>
                    { panelApp &&
                        <DevelopPanel
                            title={panelApp.title}
                            github={panelApp.repository}
                            link={panelApp.link}
                            isprivate={panelApp.isprivate}
                            status={panelApp.status}
                            description={panelApp.description}
                            techs={
                                techs_data.filter((item) => panelApp.techs.includes(item.id))
                            }
                        />
                    }
                    </Grid2>
                </Grid2>
            </Card>
    </Section>
    )
}

export default Works;