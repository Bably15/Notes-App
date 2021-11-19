import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

const Task = (props) => {
    const { passTaskData } = props;
    return (
        <Grid container spacing={2} sx={{ margin: "30px" }}>
            <Grid
                item
                xs={4}
                display="inline-flex"
                justifyContent="space-between"
            >
                {passTaskData.map((task) => (
                    <Card sx={{ padding: "50px" }}>
                        <div>{task.title}</div>
                        {task.content}
                    </Card>
                ))}
            </Grid>
        </Grid>
    );
};
export default Task;
