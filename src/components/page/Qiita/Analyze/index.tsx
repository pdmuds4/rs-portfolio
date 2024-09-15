"use client";
import { useState } from "react";
import { Card, Container, Box, Typography, Grid2 } from "@mui/material";
import { NextFonts } from "@components/ui";
import * as styles from "./style";

import { useGetterApi } from "@components/hook";
import { QiitaAnalyzeDTO } from "@usecases/qiita/getQiitaAnalyze";

const Analyze: React.FC = () => {
    const [data, setData] = useState<QiitaAnalyzeDTO[]>([]);
    useGetterApi<QiitaAnalyzeDTO[]>("/api/qiita/analyze", setData);

    return (
        <Card sx={styles.body}>
            <Container sx={styles.container}>
                <Typography 
                    variant="body1"
                    className={NextFonts.sourceCodePro.className}
                >
                    $ analyze @pam5596
                </Typography>
                <Box sx={styles.result}>
                    {data.map((item, index)=>(
                    <Grid2 key={index} container>
                        <Grid2 size={11}>
                            <Typography 
                                variant="subtitle1"
                                className={NextFonts.sourceCodePro.className}
                            >
                                {item.tech}
                            </Typography>
                        </Grid2>
                        <Grid2 size={1}>
                        <Typography 
                                variant="subtitle1"
                                className={NextFonts.sourceCodePro.className}
                                sx={styles.result_percentage}
                            >
                                {item.precentage}%
                            </Typography>
                        </Grid2>
                    </Grid2>
                    ))}
                </Box>
            </Container>
        </Card>
    )
}

export default Analyze;