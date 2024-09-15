import { SxProps } from "@mui/material";

export const body: SxProps = {
    height: "95px",
}

export const container: SxProps = {
    position: "relative",
    width: "100%"
}

export const image: SxProps = {
    objectFit: "cover",
    objectPosition: "top",
}

export const content: SxProps = {
    padding: "10px",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    width: "100%",
    height: "95px",
    boxSizing: "border-box",
    top: 0,
    left: 0,
    bgcolor: "rgba(0, 0, 0, 0.3)",
}

export const title: SxProps = {
    fontFamily: "Times New Roman",
    color: "white",
    textShadow: "1px 1px 5px rgba(255, 255, 255, 0.6)",
}

export const date: SxProps = {
    flexGrow: 1,
    color: "white",
}