import * as styles from "./style";
import { Box, Typography, Container } from "@mui/material";

const Parallax: React.FC = () => {
    return (
        <Box sx={styles.body}>
            <Container sx={styles.text} maxWidth="xl">
                <Typography variant="h1" gutterBottom sx={styles.name}>
                    Ryosuke Saiki
                </Typography>
                <Typography variant="h5" sx={styles.about}>
                    Musashino University - Faculty of Data Science
                </Typography>
            </Container>
        </Box>
    );
}

export default Parallax;