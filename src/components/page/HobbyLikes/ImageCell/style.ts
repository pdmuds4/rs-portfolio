import { SxProps } from "@mui/material"
import { CSSProperties } from "react"

export const list_image: CSSProperties = {
    height: "100px"
}

export const image_header: SxProps = {
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    background:
    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
}

export const image_title: SxProps = {
    fontSize: { xs: "20px", md: "30px" },
    fontFamily: "Times New Roman",
}

export const image_detail: SxProps = {
    transitionDuration: "0.3s", 
    height: "100%",
    "& .MuiBox-root" : {
        whiteSpace: "normal"
    }
}