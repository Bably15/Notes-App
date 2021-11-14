import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Paper, TextField, Fab } from "@mui/material";

const Input = () => {
    return (
        <Paper sx={{ padding: "50px" }}>
            <TextField label="title"></TextField>
            <TextField label="content"></TextField>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Paper>
    );
};
export default Input;
