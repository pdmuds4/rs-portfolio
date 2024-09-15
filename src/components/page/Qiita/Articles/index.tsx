"use client";
import { useState } from "react";
import { Box, Card, List } from "@mui/material";
import * as styles from "./styles";
import ArticleItem from "../ArticleItem";

import formatDate from "@utils/formatDate";
import { useGetterApi } from "@components/hook";
import { QiitaArticleDTO } from "@usecases/qiita/getQiitaArticles";

const Articles: React.FC = () => {
    const [data, setData] = useState<QiitaArticleDTO[]>([]);
    useGetterApi<QiitaArticleDTO[]>("/api/qiita/articles", setData);
    
    return (
        <>  
            <Box />
            <Card sx={styles.card}>
                <List disablePadding>
                { data.map((article, index) => (
                    <ArticleItem
                        key={index}
                        title={article.title}
                        link={article.link}
                        written_at={formatDate(new Date(article.written))}
                    />
                ))}
                </List>
            </Card>
            <Box />
        </>
    )
}

export default Articles;