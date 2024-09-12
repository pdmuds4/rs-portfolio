"use client";
import { useState } from "react";
import { Grid2, TextField } from "@mui/material";
import { JsonAccordion, JsonProp } from "@components/ui"

const DataAccordion: React.FC<{
    entity: any,
    onDelete: () => void,
    onAdd: () => void
}> = (props) => {
    return (
        <JsonAccordion
            title="null"
            onDelete={props.onDelete}
            onAdd={props.onAdd}
        >   
            <Grid2 container spacing={2}>
                <JsonProp key={1} label="title">
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="title"
                        value={null}
                    />
                </JsonProp>
                <JsonProp key={2} label="panel">
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="panel"
                        value={null}
                    />
                </JsonProp>
                <JsonProp key={3} label="detail">
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="detail"
                        value={null}
                    />
                </JsonProp>
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;