import { SxProps } from "@mui/material";
import { CSSProperties } from "react";


export const avator_wrapper: SxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "2rem",
}

export const avator: CSSProperties = {
    objectFit: "cover",
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
}

export const avator_button: SxProps = {
    ":hover": {
        bgcolor: "rgba(255, 255, 255, 0.2)",
    }
}

export const myname: SxProps = {
    letterSpacing: "0.25rem",
}

export const profile_wrapper: SxProps = {
    display: "flex",
    justifyContent: "center",
}

export const profile: SxProps = {
    opacity: 0.7,
    fontSize: {xs: "1rem", md: "1.2rem"},
    lineHeight: {xs: "1.5", md: "1.7"},
}