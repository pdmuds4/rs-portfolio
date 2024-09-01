import { SxProps } from "@mui/material";

export const body: SxProps = {
    padding: { xs: "5px", md: "20px" },
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
    // '::-webkit-scrollbar': { display: 'none' },
}

export const title: SxProps = {
    display: { xs: 'block', sm: 'none' },
    fontFamily: 'Times New Roman',
    fontSize: 20,
}