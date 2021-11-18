import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Task from "./components/Task";
import Footer from "./components/Footer";

function App() {
    const [taskData, setTaskData] = useState([]);
    const noteData = (note) => {
        setTaskData([...taskData, note]);
        console.log(note);
    };
    return (
        <div className="App">
            <Header />
            <Form passNoteData={noteData} />
            <Task passTaskData={taskData} />
            <Footer />
        </div>
    );
}

export default App;
