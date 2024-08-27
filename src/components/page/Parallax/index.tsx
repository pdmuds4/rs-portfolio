"use client";

import { s__parallax_body, s__parallax_text, s__parallax_name, s__parallax_about } from "./style";
import { Box, Typography } from "@mui/material";

const Parallax: React.FC = () => {
    return (
        <Box sx={s__parallax_body}>
            <Box sx={s__parallax_text}>
                <Typography variant="h1" gutterBottom sx={s__parallax_name}>
                    Ryosuke Saiki
                </Typography>
                <Typography variant="h5" sx={s__parallax_about}>
                    Musashino University - Faculty of Data Science
                </Typography>
            </Box>
        </Box>
    );
}

export default Parallax;