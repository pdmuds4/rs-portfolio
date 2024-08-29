import * as styles from "./style";
import { Box, Typography } from "@mui/material";

const Parallax: React.FC = () => {
    return (
        <Box sx={styles.body}>
            <Box sx={styles.text}>
                <Typography variant="h1" gutterBottom sx={styles.name}>
                    Ryosuke Saiki
                </Typography>
                <Typography variant="h5" sx={styles.about}>
                    Musashino University - Faculty of Data Science
                </Typography>
            </Box>
        </Box>
    );
}

export default Parallax;