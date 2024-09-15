"use client";
import { PropsWithChildren } from "react";
import { Box, Card, Container } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import  * as styles  from "./style";


const MainContent: React.FC<PropsWithChildren> = (props) => {
    return (
        <Box sx={styles.background_section}>
            <Container maxWidth="xl">
                <Parallax speed={10}>
                    <Card sx={styles.body}>
                        <Box sx={styles.content}>
                            {props.children}
                        </Box>
                    </Card>
                </Parallax>
            </Container>
        </Box>
    );
}

export default MainContent;