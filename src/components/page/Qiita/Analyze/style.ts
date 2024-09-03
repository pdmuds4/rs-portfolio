import { SxProps } from '@mui/system';
import { Source_Code_Pro } from "next/font/google";

export const body: SxProps = {
    color: "white",
    bgcolor: "#2f3232",
    height: "100%",
}

export const container: SxProps = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
}

export const cmd_font = Source_Code_Pro({
    subsets: ["latin"],
    weight: "600",
});

export const result_title: SxProps = {
    color: "#ffdb57",
    marginTop: "10px"
}

export const result: SxProps = {
    padding: "10px",
    marginTop: "auto",
}

export const result_percentage: SxProps = {
    color: "#aae280"
}