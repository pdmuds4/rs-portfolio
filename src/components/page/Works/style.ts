import { SxProps } from "@mui/material";

export const card_body: SxProps = {
    margin: "16px 0",
    padding: { xs: "5px", md: "20px" },
}

export const carousel_wrapper: SxProps = {
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '20%',
        background: 'linear-gradient(to top, white, transparent)',
        pointerEvents: 'none',
    },
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