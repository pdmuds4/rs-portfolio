import { SxProps } from "@mui/material";

export const divider: SxProps = {
    marginBottom: { xs: "10px", md: "20px" },
}

export const container: SxProps = {
    padding: { xs: "10px", md: "20px" },
    backgroundImage: "linear-gradient(135deg, #e8e8e8, #e6e6e6, #f5f5f5, #dddddd)",
    borderRadius: "10px",
    height: "430px",
    overflow: 'auto',
    width: '100%',
    scrollSnapType: 'x mandatory',
    '& > *': {
        scrollSnapAlign: 'center',
        flexShrink: 0,
    },
}