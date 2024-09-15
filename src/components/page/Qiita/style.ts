import { SxProps } from "@mui/material";

export const card_body: SxProps = {
    margin: "16px 0",
    height: "342px",
    bgcolor: "#3C4858",
}

export const header_body: SxProps = {
    position: "relative",
    zIndex: 100,
    backgroundImage: "linear-gradient(135deg, #e8e8e8, #e6e6e6, #f5f5f5, #dddddd)",
    boxShadow: "0 2px 4px 0 rgba(0 0 0 / 20%)",
}

export const header_logo: SxProps = {
    bgcolor: "rgb(85, 197, 0)",
    padding: "1px 1px",
    borderRadius: "4px",
}

export const content_body: SxProps = {
    padding: 0,
    height: "273px",
}

export const grid: SxProps = {
    height: "100%",
}

export const grid_analyze: SxProps = {
    display: { xs: "none", md: "block" },
    height: "100%",
    padding: { xs: "10px", md: "20px 0 20px 20px" }
}

export const grid_articles: SxProps = {
    padding: { xs: "10px", md: "20px 20px 20px 0px" },
    height: "100%",
    overflowY: "auto",
    scrollSnapType: "y mandatory",
    "& > *": {
        scrollSnapAlign: "center",
        flexShrink: 0,
    },
    '::-webkit-scrollbar': { display: 'none' },
}