import React from "react";
import Paper from "@mui/material/Paper";

const Header = () => {
    return (
        <Paper elevation={3} sx={{ padding: "30px", display: "flex" }}>
            <h1 sx={{ text: "bold" }}>REACT NOTES APP</h1>
        </Paper>
    );
};
export default Header;
