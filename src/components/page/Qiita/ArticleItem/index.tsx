import { ListItem, ListItemAvatar, ListItemText, Avatar, Typography, ListItemButton, Box, Divider } from '@mui/material';
import * as styles from './style';

const ArticleItem: React.FC<{
    link: string;
    title: string;
    written_at: string;
    is_last?: boolean;
}> = (props) => {
    return (
        <>
            <ListItem disablePadding>   
                <ListItemButton 
                    sx={styles.button_body}
                    href={props.link}
                    target='_blank'
                >
                    <ListItemAvatar sx={styles.avatar_body}>
                        <Avatar 
                            alt="It's me!" 
                            src="/icon.avif"
                            sx={styles.avatar}
                        />
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={styles.account_info}
                            >
                                @pam5596 (pam)
                            </Typography>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={styles.written_date}
                            >
                                {props.written_at}
                            </Typography>
                        </Box>
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography sx={styles.title}>
                            {props.title}
                        </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            {props.is_last ? null : 
            <Divider variant="fullWidth" component="li" />
            }
        </>
    )
};

export default ArticleItem;