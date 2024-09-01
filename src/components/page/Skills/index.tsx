"use client";
import { useState } from "react";
import { Divider, Card, Box, Tabs, Tab, Typography } from "@mui/material"
import { TabContext } from "@mui/lab"
import { DeveloperMode, SettingsSuggest, Storage, CloudUpload } from "@mui/icons-material";
import { Section, Heading } from "@components/ui"
import * as styles from "./style"

import FrontendPanel from "./FrontendPanel";
import BackendPanel from "./BackendPanel";
import DatabasePanel from "./DatabasePanel";
import DevopsPanel from "./DevopsPanel";

const Skills: React.FC = () => {
    const [value, setValue] = useState("0");
    const category_data = [
        {
            title: "FRONTEND",
            icon: <DeveloperMode 
                fontSize="large" 
                sx={styles.tab_icon}
            />,
        },
        {
            title: "BACKEND",
            icon: <SettingsSuggest 
                fontSize="large" 
                sx={styles.tab_icon}
            />,
        },
        {
            title: "DATABASE",
            icon: <Storage 
                fontSize="large" 
                sx={styles.tab_icon}
            />,
        },
        {
            title: "DEVOPS",
            icon: <CloudUpload 
                fontSize="large" 
                sx={styles.tab_icon}
            />,
        }
    ]

    return (
        <Section id="skills">
            <Heading>
                Skills
            </Heading>
            <Divider />
                <Card sx={styles.card_body}>
                    <TabContext value={value}>
                        <Box sx={styles.tablist_body}>
                            <Tabs 
                                value={value}
                                onChange={(e, v) => setValue(v)}
                                variant="fullWidth"
                                textColor="inherit"
                                sx={styles.tabs_body}
                            >   
                                {category_data.map((item, index) => (
                                    <Tab 
                                        key={index}
                                        icon={item.icon}
                                        label={
                                            <Typography variant="subtitle2" sx={styles.tab_label}>
                                                {item.title}
                                            </Typography>
                                        } 
                                        value={index.toString()}
                                        sx={styles.tab_item}
                                    />
                                ))}
                            </Tabs>
                        </Box>
                        <FrontendPanel value="0" />
                        <BackendPanel  value="1" />
                        <DatabasePanel value="2" />
                        <DevopsPanel   value="3" />
                    </TabContext>
                    
                </Card>
        </Section>
    )
}

export default Skills;