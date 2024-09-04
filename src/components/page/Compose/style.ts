import { SxProps } from "@mui/material";

export const card_body: SxProps = {
    padding: {xs: "10px 0", md: "20px 0"},
    margin: "16px 0",
    bgcolor: "#3C4858",
    position: "relative",
    "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "15%",
        zIndex: 1,
    },
    "&::before": {
        left: 0,
        background: "linear-gradient(to right, rgba(60, 72, 88, 1), rgba(60, 72, 88, 0))",
    },
    "&::after": {
        right: 0,
        background: "linear-gradient(to left, rgba(60, 72, 88, 1), rgba(60, 72, 88, 0))",
    },
}

export const embla: SxProps = {
    margin: "auto",
    "--slide-spacing": {xs: "10px", md: "20px"},
    "--slide-size": {xs: "200px", md: "580px"}
}

export const embla_viewport: SxProps = {
    overflow: "hidden",
}

export const embla_container: SxProps = {
    display: "flex",
    touchAction: "pan-y pinch-zoom",
    marginLeft: "calc(var(--slide-spacing) * -1)",
}