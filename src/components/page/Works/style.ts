import { SxProps } from "@mui/material";

export const card_body: SxProps = {
    margin: "16px 0",
    padding: { xs: "0 10px", md: "0 20px" },
    bgcolor: "#3c4858"
}

export const carousel_wrapper: SxProps = {
}

export const cards_carousel: SxProps = {
    height: {xs: "150px", md: "340px"},
    padding: "1px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflow: "auto",
    scrollSnapType: "y mandatory",
    "& > *": {
        scrollSnapAlign: "center",
        flexShrink: 0,
    },
    '::-webkit-scrollbar': { display: 'none' },
}