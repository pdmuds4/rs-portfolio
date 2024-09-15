"use client";
import { useState } from "react";
import { ImageListItem, ImageListItemBar, Typography, Box } from "@mui/material";
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
            sx={styles.list_body}
        >
            <ImageListItemBar
                sx={styles.image_header}
                title={
                    <Typography 
                        sx={styles.image_title(showDetail)}
                    >
                        {props.title}
                    </Typography>
                }
                position="top"
                actionPosition="left"
            />
            <img 
                style={styles.image}
                src={props.src}
                loading="lazy"
            />
            <ImageListItemBar
                title={
                    <Box sx={styles.detail_text}>
                        {props.detail}
                    </Box>
                }
                sx={styles.image_detail(showDetail)}

            />
        </ImageListItem>
    )
}

export default ImageCell;