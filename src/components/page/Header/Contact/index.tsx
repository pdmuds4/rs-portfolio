"use client";

import { useState } from "react";
import { Box, Tooltip, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from "@mui/material";
import { X, Instagram, GitHub, Google, Menu } from "@mui/icons-material";
import * as styles from "./style";


const Contact: React.FC = () => {
    const [open, toggleDrawer] = useState(false);

    const data = [
        {
            title: "X",
            icon: <X />,
            href: "https://x.com/pam_5596"
        },
        {
            title: "Instagram",
            icon: <Instagram />,
            href: "https://www.instagram.com/pam5596_3191"
        },
        {
            title: "Gmail",
            icon: <Google />,
            href: "https://mail.google.com/mail/?view=cm&to=ryosuke3191@gmail.com"
        },
        {
            title: "GitHub",
            icon: <GitHub />,
            href: "https://github.com/pdmuds4"
        },
    ];

    return (
        <>  
            {/* 600px以上の時はbutton group */}
            <Box sx={styles.button_group}>
                { data.map((item, index) => (
                    <Tooltip title={item.title} key={index}>
                        <Button 
                            size="large"
                            color="inherit"
                            target="_blank"
                            href={item.href}
                            sx={styles.button}
                        >
                            {item.icon}
                        </Button>
                    </Tooltip>
                ))}
            </Box>

            {/* 600px未満の時はハンバーガーメニュー */}
            <Box sx={styles.button_list}>
                <Tooltip title={"Contact"}>
                    <Button
                        size="large"
                        color="inherit"
                        onClick={() => toggleDrawer(true)}
                    >
                        <Menu />
                    </Button>
                </Tooltip>
            </Box>

            {/* ドロワー */}
            <Drawer 
                anchor="right"
                open={open} 
                onClose={()=>toggleDrawer(false)}
            >
                <Box sx={styles.drawer_content} onClick={()=>toggleDrawer(false)}>
                    <Typography variant="h6" sx={styles.drawer_title}>
                        Contact
                    </Typography>
                    <Divider />
                    <List>
                        {data.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                href={item.href}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Contact;