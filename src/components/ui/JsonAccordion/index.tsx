"use client";
import { useState } from "react";
import { PropsWithChildren } from "react";
import { Accordion, AccordionSummary, AccordionDetails, IconButton, Divider, Typography } from "@mui/material"
import { ExpandMore, Delete, Add } from "@mui/icons-material"
import * as styles from "./style"

const JsonAccordion: React.FC<PropsWithChildren<{
    title: string;
    onDelete: () => void;
    onAdd: () => void;
    onClosed: () => void;
}>> = (props) => {
    const [is_open, toggleClosed] = useState(false);

    return (
        <>
            <Accordion onChange={
                (e)=>{
                    toggleClosed(!is_open);
                    const is_closed = e.currentTarget.getAttribute("aria-expanded") === "true";
                    if (is_closed) props.onClosed();
                }
            }>
                <AccordionSummary
                    sx={styles.summary}
                    expandIcon={<ExpandMore />}
                >   
                    <Typography
                        variant="h6"
                        sx={styles.title}
                        noWrap
                    >
                        {props.title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={styles.details}
                >
                    
                    {props.children}
                </AccordionDetails>
            </Accordion>
            <Divider>
                <IconButton 
                    color="error" 
                    sx={styles.button}
                    onClick={props.onDelete}
                    disabled={is_open}
                >
                    <Delete />
                </IconButton>
                <IconButton 
                    color="success" 
                    sx={styles.button}
                    onClick={props.onAdd}
                    disabled={is_open}
                >
                    <Add />
                </IconButton>
            </Divider>
        </>
        
    )
}

export default JsonAccordion;