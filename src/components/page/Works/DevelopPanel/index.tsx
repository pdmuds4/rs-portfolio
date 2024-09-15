import { Card, Typography, CardContent, Box, Chip, Divider, AvatarGroup, Avatar, Tooltip, ButtonGroup, IconButton } from "@mui/material";
import { GitHub, Public } from "@mui/icons-material";
import * as styles from './style';
import { Text } from "@components/ui";

import { SkillsDTO } from "@models/entity/skills";

const DevelopPanel: React.FC<{
    title: string;
    github: string;
    link?: string | null;
    isprivate: boolean;
    status: number;
    description: string;
    techs: SkillsDTO[];
}> = (props) => {
    const categoryOrder = ['frontend', 'backend', 'database', 'devops'];

    const sortedTechs = props.techs.slice().sort((a, b) => {
        const indexA = categoryOrder.indexOf(a.category);
        const indexB = categoryOrder.indexOf(b.category);
        return indexA - indexB;
    });

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
                        <IconButton href={props.github} target="_blank">
                            <Tooltip title="Check for Github" arrow>
                                <GitHub fontSize="large" color="inherit" />
                            </Tooltip>
                        </IconButton>
                        {props.link ? (
                        <IconButton href={props.link} target="_blank">
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
                <Typography sx={styles.description}>
                    {props.description}
                </Typography>
                <Box sx={styles.techs}>
                    <AvatarGroup max={Infinity} sx={styles.techs_group}>
                    {sortedTechs.map((tech, index) => (
                        <Tooltip title={tech.title} arrow key={index}>
                            <Avatar 
                                sx={styles.tech_avatar(tech.category)}
                                src={tech.symbol}
                                alt={tech.title}
                            />
                        </Tooltip>
                    ))}
                    </AvatarGroup>
                </Box>
            </CardContent>
        </Card>
    )
}

export default DevelopPanel;