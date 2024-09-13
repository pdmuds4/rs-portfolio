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
                <JsonProp key={2} label="thumnail" type="file" value={"thumnail"} />
                <JsonProp key={3} label="description" type="text" value={"description"} />
                <JsonProp key={4} label="techs" type="array" value={[]} />
                <JsonProp key={5} label="repository" type="text" value={"repository"} />
                <JsonProp key={6} label="link" type="text" value={"link"} />
                <JsonProp key={7} label="isprivate" type="boolean" value={true} />
                <JsonProp key={8} label="status" type="select" value={1} />
                <JsonProp key={9} label="created" type="date" value={new Date("2024-09-09")} />
            </Grid2>
        </JsonAccordion>
    )
}

export default DataAccordion;