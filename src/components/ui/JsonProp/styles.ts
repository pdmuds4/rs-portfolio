import { SxProps } from "@mui/material";
import { CSSProperties } from "react";


export const key_title: SxProps = {
    color: "#3c4858",
    fontWeight: "bold",
}

export const upload_input: CSSProperties = {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
}

export const checkbox_list: SxProps = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 200,
    '& ul': { padding: 0 },
}