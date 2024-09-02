import { SxProps } from "@mui/material";

export const body: SxProps = {
    bgcolor: "#3c4858",
    position: 'relative',
    padding: { xs: "5px", md: "20px" },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '20%',
        background: 'linear-gradient(to left, #3c4858, transparent)',
        pointerEvents: 'none',
    },
}

export const contain: SxProps = {
    display: 'flex',
    gap: 1,
    py: 1,
    overflow: 'auto',
    width: '100%',
    scrollSnapType: 'x mandatory',
    '& > *': {
        scrollSnapAlign: 'center',
        flexShrink: 0,
    },
    '::-webkit-scrollbar': { display: 'none' },
}

export const title: SxProps = {
    display: { xs: 'block', sm: 'none' },
    fontFamily: 'Times New Roman',
    fontSize: 20,
    color: "#3C4858"
}