"use client";
import { PropsWithChildren } from "react";
import { Box, Card } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import  * as styles  from "./style";


const MainContent: React.FC<PropsWithChildren> = (props) => {
    return (
        <Box sx={styles.background_section}>
            <Parallax speed={8}>
                <Card sx={styles.body}>
                    <Box sx={styles.content}>
                        {props.children}
                    </Box>
                </Card>
            </Parallax>
        </Box>
    );
}

export default MainContent;