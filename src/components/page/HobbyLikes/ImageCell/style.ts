import { SxProps } from "@mui/material"
import { CSSProperties } from "react"

export const list_body: SxProps = {
    height: { xs: "150px !important", md: "250px !important" }
}

export const image: CSSProperties = {
    height: 0
}

export const image_header: SxProps = {
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    background:
    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
}

export const image_title = (showDetail: boolean): SxProps => ({
    fontSize: { xs: "20px", md: "30px" },
    fontFamily: "Times New Roman",
    transitionDuration: "0.3s",
    opacity: showDetail ? 0 : 1,
    visibility: showDetail ? 'hidden' : 'visible',
})

export const image_detail = (showDetail: boolean): SxProps => ({
    transitionDuration: "0.3s", 
    height: "100%",
    "& .MuiBox-root" : {
        whiteSpace: "normal"
    },
    opacity: showDetail ? 1 : 0,
    visibility: showDetail ? 'visible' : 'hidden',
})

export const detail_text: SxProps = {
    fontSize: { xs: "12px", md: "20px" },
    letterSpacing: { xs: 0, md: ".1rem" },
    color: "white",
}