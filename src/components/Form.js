import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

const Form = (props) => {
    const { passNoteData } = props;
    const [formData, setFormData] = useState({
        title: "",
        content: "",
    });

    const formChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        passNoteData(formData);
    };
    return (
        <Paper>
            <form onSubmit={formSubmitHandler}>
                <TextField
                    name="title"
                    value={formData.title}
                    id="Title"
                    label="title"
                    variant="standard"
                    onChange={formChange}
                />
                <TextField
                    name="content"
                    value={formData.content}
                    onChange={formChange}
                    id="content"
                    label="content"
                    variant="standard"
                />
                <Fab color="primary" aria-label="add" type="submit">
                    <AddIcon />
                </Fab>
            </form>
        </Paper>
    );
};

export default Form;
