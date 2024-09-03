import { Card, Container, Box, Typography, Grid2 } from "@mui/material";
import { NextFonts } from "@components/ui";
import * as styles from "./style";

const Analyze: React.FC = () => {
    const data = [
        {
            title: "JavaScript",
            percentage: "47%"
        },
        {
            title: "React",
            percentage: "33%"
        },
        {
            title: "Python",
            percentage: "27%"
        },
        {
            title: "TypeScript",
            percentage: "20%"
        },
        {
            title: "Next.js",
            percentage: "20%"
        }
    ]

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
                                {item.title}
                            </Typography>
                        </Grid2>
                        <Grid2 size={1}>
                        <Typography 
                                variant="subtitle1"
                                className={NextFonts.sourceCodePro.className}
                                sx={styles.result_percentage}
                            >
                                {item.percentage}
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