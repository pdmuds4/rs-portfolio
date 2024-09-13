"use client";
import { useState } from "react";
import { Grid2 } from "@mui/material";
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
                <JsonProp key={1} type="text" label="title" value={"title"} />
                <JsonProp key={2} type="text" label="thumnail" value={"thumnail"} />
                <JsonProp key={3} type="text" label="description" value={"description"} />
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;