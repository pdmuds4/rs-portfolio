import { Card, CardMedia, CardContent, CardActionArea, Typography } from "@mui/material";
import * as styles from "./style";

const DevelopCard: React.FC<{
    title: string;
    thumbnail: string;
    created: string;
    changePanel: () => void;
}> = (props) => {
    return (
        <Card sx={styles.body}>
            <CardActionArea sx={styles.container} onClick={props.changePanel}>
                <CardMedia
                    sx={styles.image}
                    component="img"
                    image={props.thumbnail}
                />
                <CardContent sx={styles.content}>
                    <Typography
                        sx={styles.title}
                        variant="h4"
                        component="h4"
                        noWrap
                    >
                        {props.title}
                    </Typography>
                    <Typography 
                        sx={styles.date}
                        variant="subtitle2" 
                        component="span"
                        align="right" 
                        noWrap
                    >
                        {props.created}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default DevelopCard;