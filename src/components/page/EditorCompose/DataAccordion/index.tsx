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
                <JsonProp key={2} label="artwork" type="file" value={"artwork"} />
                <JsonProp key={3} label="genre" type="text" value={"genre"} />
                <JsonProp key={4} label="audio" type="file" value={"audio"} />
                <JsonProp key={5} label="youtube url" type="text" value={"youtube url"} />
                <JsonProp key={6} label="soundcloud url" type="text" value={"soundcloud url"} />
                <JsonProp key={7} label="x url" type="text" value={"x url"} />
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;