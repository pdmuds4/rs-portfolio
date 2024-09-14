"use client";
import { Grid2, Typography, TextField, Switch, List, ListItem, ListItemButton, ListItemText, ListSubheader, Checkbox, Select, MenuItem, Button } from "@mui/material";
import { CloudUpload, DriveFileMove } from "@mui/icons-material";
import * as styles from "./styles";

const JsonProp: React.FC<{
    label: string;
    type: "text" | "number" | "boolean" | "array" | "select" | "file" | "date";
    error?: boolean;
    value: string | number | boolean | number[] | Date;
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
                        //onChange={}
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
                        //onChange={}
                    />
                ) : props.type === "boolean" ? (
                    <Switch 
                        defaultChecked={props.value as boolean}
                        // onChange={}
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
                                    {[0, 1, 2].map((item) => (
                                    <ListItem 
                                        key={`item-${item}`}
                                        secondaryAction={
                                            <Checkbox
                                                edge="end"
                                                // onChange={handleToggle(value)}
                                                defaultChecked={true}
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemText primary={item} />
                                        </ListItemButton>
                                    </ListItem>
                                    ))}
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
                        // onChange={}
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
                        >
                            Upload
                            <input 
                                type="file" 
                                style={styles.upload_input} 
                                onChange={(event) => console.log(event.target.files)}
                            />
                        </Button>
                        <Button 
                            variant="contained" 
                            color="success"
                            startIcon={<DriveFileMove />}
                            disabled={!Boolean(props.value)}
                            href={props.value as string}
                        >
                            Check File
                        </Button>
                    </Grid2>
                ) : props.type === "date" ? (
                    <input 
                        type="date"
                        value={formatDate(props.value as Date)}
                        onChange={(event) => console.log(event.target.value)}
                    />
                ) : null 
                }
                </Grid2>
            </Grid2>
        </Grid2>
    )
}

export default JsonProp;