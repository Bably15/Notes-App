import React from "react";
import { Card, Grid, Container, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = (props) => {
    const { passTaskData, passDeleteNote } = props;
    const deleteNote = (taskID) => {
        passDeleteNote(taskID);
    };
    return (
        <Container sx={{ marginTop: "2rem" }}>
            <Grid container spacing={2}>
                {passTaskData.map((task) => (
                    <Grid item xs={4}>
                        <Card
                            sx={{
                                padding: "50px",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <div>{task.title}</div>
                                <span>{task.content}</span>
                            </div>
                            <Button
                                onClick={() => deleteNote(task.id)}
                                sx={{ color: "red" }}
                            >
                                <DeleteIcon />
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default Task;
