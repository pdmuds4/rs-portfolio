import { SxProps } from "@mui/material";
import { Source_Code_Pro } from "next/font/google";

export const body: SxProps = {
    width: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: {xs: "5px", sm: "10px"},
    backgroundImage: "linear-gradient(135deg, #f9f9f9, #e1e1e1)",
}

export const symbol: SxProps = { 
    m: "10px auto", 
    position: 'relative'
}

export const avator: SxProps = {
    width: 100,
    height: 100,
}

export const progress: SxProps = {
    position: 'absolute',
    top: -10,
    left: -10,
    zIndex: 1,
    opacity: 0.7,
}

export const title_font = Source_Code_Pro({
    subsets: ["latin"],
    weight: "600",
});

export const title: SxProps = {
    color: "#3C4858",
}