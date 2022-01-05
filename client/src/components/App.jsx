import React, { useEffect, useState } from "react";
import Axios from "axios";
import Board from "./Board.jsx";

const App = () => {

    useEffect(() => {
        getTitle();
    }, []);

    let [ appTitle, setAppTitle ] = useState("");

    const getTitle = () => {
        Axios.get("/title")
        .then(response => {
            setAppTitle(response.data);
        })
        .catch(err => {
            console.log('Error received during Axios GET request');
        })
    }

    return (
        <div>
            <h1 className="title">{appTitle}</h1>
            <Board />
        </div>
    )

}

export default App;