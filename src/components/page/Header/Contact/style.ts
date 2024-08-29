import { SxProps} from "@mui/material";


export const button_group: SxProps = {
    display: { xs: 'none', sm: 'flex' },
}

export const button_list: SxProps = {
    display: { xs: 'flex', sm: 'none' },
    marginLeft: "auto"
}

export const button: SxProps = {
    ":hover": {
        bgcolor: "rgba(255, 255, 255, 0.2)",
    }
}

export const drawer_content: SxProps = {
    width: "250px",
    color: "rgba(0, 0, 0, 0.54)",
}

export const drawer_title: SxProps = {
    fontWeight: "bold",
    textAlign: "center", 
    margin: "1rem 0"
}

