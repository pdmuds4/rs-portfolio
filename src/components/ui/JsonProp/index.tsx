import { PropsWithChildren } from "react";
import { Grid2, Typography } from "@mui/material";
import * as styles from "./styles";

const JsonProp: React.FC<PropsWithChildren<{
    label: string;
}>> = (props) => {
    return (
        <Grid2 size={12}>
            <Grid2 container spacing={1} size={12} alignItems={"center"}>
                <Grid2 size={4}>
                    <Typography variant="subtitle1" sx={styles.key_title}>
                        {props.label}
                    </Typography>
                </Grid2>
                <Grid2 size={8}>
                    {props.children}
                </Grid2>
            </Grid2>
        </Grid2>
    )
}

export default JsonProp;