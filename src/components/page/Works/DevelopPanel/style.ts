import { SxProps } from "@mui/material";

export const body: SxProps = {
    height: "300px",
    boxShadow: "0 2px 4px 0 rgba(0 0 0 / 20%)",
    backgroundImage: "linear-gradient(135deg, #e8e8e8, #e6e6e6, #f5f5f5, #dddddd)",
}

export const container: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    color: "#3C4858",
    height: "100%",
    boxSizing: "border-box",
}

export const title: SxProps = {
    fontFamily: "Times New Roman",
    fontWeight: "bold",
}

export const header: SxProps = {
    display: 'flex',
    alignItems: 'center',
}

export const access: SxProps = {
    marginLeft: 'auto',
}

export const chips: SxProps = {
    display: 'flex',
    gap: 1,
}

export const techs: SxProps = {
    display: 'flex',
    gap: 1,
    marginTop: 'auto',
    overflow: 'auto',
    width: '100%',
    scrollSnapType: 'x mandatory',
    '& > *': {
        scrollSnapAlign: 'center',
        flexShrink: 0,
    },
    '::-webkit-scrollbar': { display: 'none' },
}