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
                <JsonProp key={1} label="title" type="text" value={"title"} />
                <JsonProp key={2} label="symbol" type="text" value={"symbol"} />
                <JsonProp key={3} label="progress" type="number" value={0} />
                <JsonProp key={4} label="category" type="select" value={"frontend"} />
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;