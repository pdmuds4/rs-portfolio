import { SxProps} from "@mui/material";


export const body: SxProps = {
    bgcolor: "transparent",
}

export const symbol: SxProps = {
    borderRadius: 0,
    margin: "0 0.5rem",
    cursor: "pointer",
}

export const title: SxProps = {
    display: { xs: 'none', sm: 'flex' },
    fontFamily: 'monospace',
    letterSpacing: '.15rem',
    color: 'inherit',
    textDecoration: 'none',
    flexGrow: 1,
}
