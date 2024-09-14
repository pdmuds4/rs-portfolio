"use client";
import { Grid2, Typography, TextField, Switch, List, ListItem, ListItemButton, ListItemText, ListSubheader, Checkbox, Select, MenuItem, Button } from "@mui/material";
import { CloudUpload, DriveFileMove } from "@mui/icons-material";
import * as styles from "./styles";

import { SkillsDTO } from "@models/entity/skills";

const JsonProp: React.FC<{
    label: string;
    type: "text" | "textarea" | "number" | "boolean" | "array" | "select" | "file" | "date";
    error?: boolean;
    value: string | number | boolean | number[] | Date;
    onChange: (event: any) => void;
    skills_data?: SkillsDTO[];
}> = (props) => {
    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <Grid2 size={12}>
            <Grid2 container spacing={1} size={12} alignItems={"center"}>
                <Grid2 size={5}>
                    <Typography variant="subtitle1" sx={styles.key_title}>
                        {props.label}
                    </Typography>
                </Grid2>
                <Grid2 size={7}>
                {props.type === "text" ? (
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        label={props.label}
                        defaultValue={props.value}
                        error={props.error}
                        onChange={(event) => props.onChange(event)}
                    />
                ) : props.type === "textarea" ? (
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        multiline
                        maxRows={4}
                        label={props.label}
                        defaultValue={props.value}
                        error={props.error}
                        onChange={(event) => props.onChange(event)}
                    />
                ) : props.type === "number" ? (
                    <TextField
                        fullWidth
                        variant="filled"
                        size="small"
                        type="number"
                        label={props.label}
                        defaultValue={props.value}
                        error={props.error}
                        onChange={(event) => props.onChange(event)}
                    />
                ) : props.type === "boolean" ? (
                    <Switch 
                        defaultChecked={props.value as boolean}
                        onChange={() => props.onChange(!props.value as boolean)}
                    />
                ) : props.type === "array" ? (
                    <List
                        sx={styles.checkbox_list}
                        subheader={<li />}
                        >
                        {["frontend", "backend", "database", "devops"].map((section) => (
                            <li key={`section-${section}`}>
                                <ul>
                                    <ListSubheader>{section}</ListSubheader>
                                    {props.skills_data ? props.skills_data
                                    .filter((skill)=>skill.category === section)
                                    .map((skill) => (
                                    <ListItem 
                                        key={skill.id}
                                        secondaryAction={
                                            <Checkbox
                                                edge="end"
                                                onChange={()=>props.onChange(skill.id)}
                                                defaultChecked={
                                                    (props.value as number[]).includes(skill.id)
                                                }
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemText primary={skill.title} />
                                        </ListItemButton>
                                    </ListItem>
                                    )): null}
                                </ul>
                            </li>
                        ))}
                    </List>
                ) : props.type === "select" ? (
                    <Select
                        defaultValue={props.value}
                        label={props.label}
                        fullWidth
                        variant="filled"
                        onChange={(event) => props.onChange(event)}
                    >   
                    {props.label === "status" ? (
                        ["未公開", "公開中", "再開発中", "停止中"].map((status, index) => (
                            <MenuItem key={index} value={index}>
                                {status}
                            </MenuItem>
                        ))) : (
                        ["frontend", "backend", "database", "devops"].map((status, index) => (
                            <MenuItem key={index} value={status}>
                                {status}
                            </MenuItem>
                        )))
                    }
                    </Select>
                ) : props.type === "file" ? (
                    <Grid2 container spacing={2}>
                        <Button
                            component="label"
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUpload />}
                            color={props.error ? "error" : "primary"}
                        >
                            Upload
                            <input 
                                type="file" 
                                style={styles.upload_input} 
                                onChange={(event) => props.onChange(event)}
                            />
                        </Button>
                        <Button 
                            variant="contained" 
                            color="success"
                            startIcon={<DriveFileMove />}
                            disabled={!Boolean(props.value)}
                            href={props.value as string}
                            target="_blank"
                        >
                            Check File
                        </Button>
                    </Grid2>
                ) : props.type === "date" ? (
                    <input 
                        type="date"
                        defaultValue={formatDate(props.value as Date)}
                        onChange={(event) => props.onChange(event)}
                    />
                ) : null 
                }
                </Grid2>
            </Grid2>
        </Grid2>
    )
}

export default JsonProp;