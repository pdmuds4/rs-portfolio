"use client";
import { useState } from "react";

import { Divider, ImageList } from "@mui/material"
import { Section, Heading } from "@components/ui"
import * as styles from "./style"
import ImageCell from "./ImageCell"

import { useGetterApi } from "@components/hook"
import { HobbyLikesDTO } from "@models/entity/hobbylikes"

const HobbyLikes: React.FC = () => {
    const [data, setData] = useState<HobbyLikesDTO[]>([]);
    useGetterApi<HobbyLikesDTO[]>("/api/hobbylikes", setData);
    
    return (
        <Section id="hobbylikes">
            <Heading>
                Hobby&Likes
            </Heading>
            <Divider />
            <ImageList 
                sx={styles.list_body}
                gap={1}
                cols={0}
            >
                {data.map((item, index) => (
                    <ImageCell 
                        key={index}
                        title={item.title}
                        src={item.panel}
                        detail={item.detail}
                    />
                ))}
            </ImageList>
        </Section>
    )
}

export default HobbyLikes;