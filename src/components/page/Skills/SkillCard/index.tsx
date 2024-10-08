import { Card, Box, CircularProgress, Avatar, Typography, Chip } from "@mui/material"
import { NextFonts } from "@components/ui";
import * as styles from "./style";

const SkillCard: React.FC<{
    color: "primary" | "secondary" | "success" | "warning";
    symbol: string;
    title: string;
    progress: number;
}> = (props) => {
    return (
        <Card sx={styles.body}>
            <Box sx={styles.symbol}>
                <Avatar
                    sx={styles.avator}
                    src={props.symbol}
                />
                <CircularProgress
                    color={props.color}
                    variant="determinate"
                    size={120}
                    value={props.progress * 10}
                    sx={styles.progress}
                />
            </Box>
            <Typography
                className={NextFonts.sourceCodePro.className}
                sx={styles.title}
                align="center"
                variant="h6"
                noWrap
            >{props.title}</Typography>
            <Chip 
                className={NextFonts.sourceCodePro.className}
                label={`${props.progress}/10`} 
                color={props.color}
            />
        </Card>
    )
}

export default SkillCard;