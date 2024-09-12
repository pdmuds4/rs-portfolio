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
                <JsonProp key={2} label="panel">
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="panel"
                        value={entity?.panel}
                    />
                </JsonProp>
                <JsonProp key={3} label="detail">
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label="detail"
                        value={entity?.detail}
                    />
                </JsonProp>
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;