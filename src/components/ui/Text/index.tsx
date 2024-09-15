import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import * as styles from "./style";

const Text: React.FC<PropsWithChildren> = (props) => {
    return (
        <Box sx={styles.base_style}>
            {props.children}
        </Box>
    )
}

export default Text;