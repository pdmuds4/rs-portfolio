"use client";
import { useState } from "react";
import { ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { Text } from "@components/ui";
import * as styles from "./style";

const ImageCell: React.FC<{
    key: number;
    title: string;
    src: string;
    detail: string;
}> = (props) => {
    const [showDetail, toggleDetail] = useState(false);
    return (
        <ImageListItem 
            key={props.key}
            onMouseEnter={()=>toggleDetail(true)}
            onMouseLeave={()=>toggleDetail(false)}
        >
            <ImageListItemBar
                sx={styles.image_header}
                title={
                    <Typography 
                        sx={styles.image_title}
                    >
                        {props.title}
                    </Typography>
                }
                position="top"
                actionPosition="left"
            />
            <img 
                style={styles.list_image}
                src={props.src}
                loading="lazy"
            />
            <ImageListItemBar
                title={
                    <Text>
                        {props.detail}
                    </Text>
                }
                sx={{
                    opacity: showDetail ? 1 : 0,
                    visibility: showDetail ? 'visible' : 'hidden',
                    ...styles.image_detail
                }}
                
            />
        </ImageListItem>
    )
}

export default ImageCell;