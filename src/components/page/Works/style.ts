import { SxProps } from "@mui/material";

export const card_body: SxProps = {
    margin: "16px 0",
    padding: { xs: "5px", md: "20px" },
    backgroundImage: "linear-gradient(135deg, #e8e8e8, #ebebeb, #f5f5f5, #e6e6e6)",
}

export const cards_carousel: SxProps = {
    height: {xs: "150px", md: "300px"},
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
    // '::-webkit-scrollbar': { display: 'none' },
}