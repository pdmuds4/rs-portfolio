"use client";
import { useState } from "react";
import { Divider, Card, Grid2 } from "@mui/material"
import * as styles from "./style";
import { Section, Heading, DevelopCard, DevelopPanel } from "@components/ui"

const Works: React.FC = () => {
    const data = [
        {
            title: "MediQal now",
            thumbnail: "https://bjcvqtifhfyhgfkllzki.supabase.co/storage/v1/object/public/works-development/SS%202024-08-24%2019.31.55.png",
            created: "2024/08/09",
            github: "https://github.com/pdmuds4/mediqal-now",
            link: "https://mti-internship.s3.ap-northeast-1.amazonaws.com/index.html",
            isprivate: false,
            status: 1,
            description: "あいうえお",
            techsID: [1, 2, 3, 4, 5]
        },
        {
            title: "Shopping Mapper",
            thumbnail: "https://bjcvqtifhfyhgfkllzki.supabase.co/storage/v1/object/public/works-development/sm.png",
            created: "2024/7/30",
            github: "https://github.com/pdmuds4/shopping-mapper",
            link: "https://shopping-mapper.vercel.app/",
            isprivate: false,
            status: 0,
            description: "あいうえお",
            techsID: [1, 2, 3, 4, 5]
        }
    ]

    const [panelApp, setPanelApp] = useState(data[0]);

    return (
        <Section id="works">
            <Heading>
                Works
            </Heading>
            <Divider />
            <Card sx={styles.card_body}>
                <Grid2 container spacing={3}>
                    <Grid2 size={{xs: 12, md: 5}} sx={styles.cards_carousel}>
                        {data.map((item, index) => (
                            <DevelopCard 
                                key={index}
                                title={item.title}
                                thumbnail={item.thumbnail}
                                created={item.created}
                                changePanel={() => setPanelApp(item)}
                            />
                        ))}
                    </Grid2>
                    <Grid2 size={{xs: 12, md: 7}}>
                        <DevelopPanel
                            title={panelApp.title}
                            github={panelApp.github}
                            link={panelApp.link}
                            isprivate={panelApp.isprivate}
                            status={panelApp.status}
                            description={panelApp.description}
                            techsID={panelApp.techsID}
                        />
                    </Grid2>
                </Grid2>
            </Card>
    </Section>
    )
}

export default Works;