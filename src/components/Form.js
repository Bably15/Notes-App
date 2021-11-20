import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
    Container,
    Grid,
    Card,
    CardContent,
    TextField,
    Fab,
} from "@mui/material";

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
        <Container sx={{ marginTop: "3rem" }}>
            <Card>
                <CardContent>
                    <form onSubmit={formSubmitHandler}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12}>
                                <TextField
                                    name="title"
                                    value={formData.title}
                                    id="Title"
                                    label="title"
                                    variant="standard"
                                    onChange={formChange}
                                    rows={4}
                                    fullWidth
                                    autoComplete="off"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="content"
                                    value={formData.content}
                                    onChange={formChange}
                                    id="content"
                                    label="content"
                                    variant="standard"
                                    fullWidth
                                    autoComplete="off"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Fab
                                    color="primary"
                                    aria-label="add"
                                    type="submit"
                                >
                                    <AddIcon />
                                </Fab>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Form;
