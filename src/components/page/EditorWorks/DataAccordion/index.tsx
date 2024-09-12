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
                <JsonProp key={2} label="thumnail">
                    thumnail
                </JsonProp>
                <JsonProp key={3} label="description">
                    description
                </JsonProp>
                <JsonProp key={4} label="techs">
                    techs
                </JsonProp>
                <JsonProp key={5} label="repository">
                    repository
                </JsonProp>
                <JsonProp key={6} label="link">
                    link
                </JsonProp>
                <JsonProp key={7} label="isprivate">
                    isprivate
                </JsonProp>
                <JsonProp key={8} label="status">
                    status
                </JsonProp>
                <JsonProp key={9} label="created">
                    created
                </JsonProp>
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;