"use client";
import { useState } from "react";
import { Grid2, TextField } from "@mui/material";
import { JsonAccordion, JsonProp } from "@components/ui"

const DataAccordion: React.FC<{
    entity: any,
    onDelete: () => void,
    onAdd: () => void
}> = (props) => {
    const [entity, setEntity] = useState(props.entity);

    return (
        <JsonAccordion
            title="null"
            onDelete={props.onDelete}
            onAdd={props.onAdd}
            onClosed={() => console.log("closed")}
        >   
            <Grid2 container spacing={2}>
                <JsonProp key={1} label="title">
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="title"
                        value={entity?.title}
                    />
                </JsonProp>
                <JsonProp key={2} label="symbol">
                    symbol
                </JsonProp>
                <JsonProp key={3} label="progress">
                    progress
                </JsonProp>
                <JsonProp key={4} label="category">
                    category
                </JsonProp>
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;