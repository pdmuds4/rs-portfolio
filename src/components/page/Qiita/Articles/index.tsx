import { Box, Card, List } from "@mui/material";
import * as styles from "./styles";
import ArticleItem from "../ArticleItem";

const Articles: React.FC = () => {
    const data = [
        {
            title: 'ReactRouteDOM+ViteのVercelデプロイに苦労した',
            link: 'https://qiita.com/pam5596/items/a61d299c952daadc9424',
            written_at: '2024年07月14日',
        },
        {
            title: '【JavaScript】え？forって使わんの？',
            link: 'https://qiita.com/pam5596/items/1c5e5b8b8e9b8b8b8e9b',
            written_at: '2024年07月14日',
        },
        {
            title: '【Nextjs on Vercel】useContextの使い方に気をつけよう',
            link: 'https://qiita.com/pam5596/items/fdff1b326cd566851dd1',
            written_at: '2024年06月17日',
        }
    ]
    return (
        <>  
            <Box />
            <Card sx={styles.card}>
                <List disablePadding>
                { data.map((item, index) => (
                    <ArticleItem
                        key={index}
                        title={item.title}
                        link={item.link}
                        written_at={item.written_at}
                    />
                ))}
                </List>
            </Card>
            <Box />
        </>
    )
}

export default Articles;