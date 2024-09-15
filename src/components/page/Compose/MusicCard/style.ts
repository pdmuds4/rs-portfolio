import { SxProps } from "@mui/material";


export const card_wrapper: SxProps = {
    transform: "translate3d(0, 0, 0)",
    flex: "0 0 var(--slide-size)",
    paddingLeft: "var(--slide-spacing)",
}

export const main: SxProps = {
    backgroundImage: "linear-gradient(135deg, #f9f9f9, #e1e1e1)",
    display: "flex",
    flexDirection: {xs: "column", md: "row"},
    border: "solid #a1a1a1",
    transition: "border-width 0.2s",
}

export const artwork: SxProps = {
    width: {xs: "100%", md: "40%"},
    height: "auto",
    boxShadow: {xs: "10px 0 10px 5px rgba(0, 0, 0, 0.3)", md: "10px 0 10px -10px rgba(0, 0, 0, 0.3)"},
}

export const captions: SxProps = {
    width: {xs: "100%", md: "60%"},
    display: "flex",
}

export const info_content: SxProps = {
    padding: {xs: "10px", md: "20px"},
    color: '#3c4858',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
}

export const title_text: SxProps = {
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: {xs: "1rem", md: "1.5rem"},
}

export const genre_text: SxProps = {
    color: "#3c4858",
    opacity: 0.8,
    fontFamily: "Times New Roman",
}

export const play_pause_button: SxProps = {
    textAlign: "center",
}


export const check_content: SxProps = {
    display: "flex",
    gap: "10px",
    marginTop: "auto",
    justifyContent: "flex-end"
}