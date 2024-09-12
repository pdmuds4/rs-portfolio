import { PropsWithChildren } from "react";
import { Accordion, AccordionSummary, AccordionDetails, IconButton, Divider, Typography } from "@mui/material"
import { ExpandMore, Delete, Add } from "@mui/icons-material"
import * as styles from "./style"

const JsonAccordion: React.FC<PropsWithChildren<{
    title: string;
    onDelete: () => void;
    onAdd: () => void;
}>> = (props) => {
    return (
        <>
            <Accordion>
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
                >
                    <Delete />
                </IconButton>
                <IconButton 
                    color="success" 
                    sx={styles.button}
                    onClick={props.onAdd}
                >
                    <Add />
                </IconButton>
            </Divider>
        </>
        
    )
}

export default JsonAccordion;