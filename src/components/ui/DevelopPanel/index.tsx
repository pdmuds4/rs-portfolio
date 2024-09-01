import { Card, Typography, CardContent, Box, Chip, Divider, AvatarGroup, Avatar, Tooltip, ButtonGroup, IconButton } from "@mui/material";
import { GitHub, Public } from "@mui/icons-material";
import * as styles from './style';
import { Text } from "@components/ui";

const DevelopPanel: React.FC<{
    title: string;
    github: string;
    link?: string;
    isprivate: boolean;
    status: number; // 0: 未公開, 1: 公開中, 2: 再開発中, 3: 停止中
    description: string;
    techsID: number[];
}> = (props) => {
    // [TODO]: techsIDをもとにAPIを叩いて技術スタックを表示する

    return (
        <Card sx={styles.body}>
            <CardContent sx={styles.container}>
                <Box sx={styles.header}>
                    <Typography
                            variant="h5"
                            component="div"
                            sx={styles.title}
                        >
                        {props.title}
                    </Typography>
                    <ButtonGroup sx={styles.access}>
                        <IconButton href={props.github}>
                            <Tooltip title="Check for Github" arrow>
                                <GitHub fontSize="large" color="inherit" />
                            </Tooltip>
                        </IconButton>
                        {props.link ? (
                        <IconButton href={props.link}>
                            <Tooltip title="Go to Application" arrow>
                                <Public fontSize="large" color="primary" />
                            </Tooltip>
                        </IconButton>
                        ) : null}
                    </ButtonGroup>
                </Box>
                <Divider />
                <Box sx={styles.chips}>
                    <Chip 
                        label={props.isprivate ? "個人開発" : "チーム開発"}
                        color={props.isprivate ? "primary" : "secondary"}
                    />
                    <Chip 
                        label={
                            props.status === 0 ? "未公開" : 
                            props.status === 1 ? "公開中" : 
                            props.status === 2 ? "再開発中" : "停止中"
                        }
                        color={
                            props.status === 0 ? "default" :
                            props.status === 1 ? "success" : 
                            props.status === 2 ? "warning" : "error"
                        }
                    />
                </Box>
                <Text>
                    {props.description}
                </Text>
                <Box sx={styles.techs}>
                    <AvatarGroup>
                        {/* <Tooltip title="React" arrow>
                            <Avatar 
                                src=""
                                alt="React"
                            />
                        </Tooltip> */}
                    </AvatarGroup>
                </Box>
            </CardContent>
        </Card>
    )
}

export default DevelopPanel;