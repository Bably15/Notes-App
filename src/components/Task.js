import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Task = (props) => {
    const { passTaskData } = props;
    return (
        <Grid container spacing={2} sx={{ margin: "30px" }}>
            <Grid item xs={3}>
                <Paper elevation={2} sx={{ padding: "50px" }} key="uniqueid1">
                    {passTaskData.map((task) => (
                        <div>
                            <span>{task.title}</span>
                            {task.content}
                        </div>
                    ))}
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Task;
