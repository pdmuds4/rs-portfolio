import { SxProps} from "@mui/material";


export const body: SxProps = {
    backgroundImage: 'url("/parallax.png")',
    transform: "translate3d(0px, 0px, 0px);",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "75% 0",
    height: "90vh",
    display: "flex",
    color: "white"
}

export const text: SxProps = {
    width: "100%",
    margin: { xs: "20px", md: "40px" },
}

export const name: SxProps = {
    fontWeight: "bold", 
    fontFamily: "Times New Roman",
    letterSpacing: "0.1rem",
    fontSize: { xs: "4rem", md: "6rem" },
}

export const about: SxProps = {
    fontFamily: "Times New Roman",
    letterSpacing: "0.1rem",
    fontSize: { xs: "1rem", md: "1.5rem" },
}

