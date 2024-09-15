import { Box, Typography } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import * as styles from "./style";
import { PropsWithChildren } from "react";

const SkillPanel: React.FC<
    PropsWithChildren<{
        value: string;
        title: string;
    }>
> = (props) => {
    return (
        <TabPanel value={props.value} sx={styles.body}>
            <Typography align="center" sx={styles.title}>
                {props.title}
            </Typography>
            <Box sx={styles.contain}>
                <Box width={{xs: 5, md: 10}} />
                {props.children}
                <Box width={{xs: 5, md: 10}} />
            </Box>
        </TabPanel>
    )
}

export default SkillPanel;