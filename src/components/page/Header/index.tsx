import { AppBar, Container, Toolbar, Typography, Avatar} from "@mui/material";
import * as styles from "./style";

import Contact from "./Contact";


const Header: React.FC = () => {
    return (
        <AppBar sx={styles.body}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar alt="Rscript" src="icon.svg" sx={styles.symbol}/>
                    <Typography
                        variant="subtitle1"
                        noWrap
                        sx={styles.title}
                    >
                        Ryosuke Saiki`s Portfolio
                    </Typography>
                    <Contact />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;