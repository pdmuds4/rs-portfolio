"use client";
import { useEffect, useState } from "react";
import { AppBar, Container, Toolbar, Typography, Avatar} from "@mui/material";
import * as styles from "./style";

import Contact from "./Contact";


const Header: React.FC = () => {
    const [appBarbgColor, setBgColor] = useState("transparent");

    useEffect(()=>{
        const scrollHandler = () => {
            if(window.scrollY < 200){
                setBgColor("transparent");
            } else {
                setBgColor("#212121");
            }
        };

        window.onscroll = scrollHandler;

        return () => {
            window.onscroll = null;
        };
    },[])

    return (
        <AppBar sx={{...styles.body, bgcolor: appBarbgColor}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar alt="Rscript" src="icon.svg" sx={styles.symbol}/>
                    <Typography
                        variant="h6"
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