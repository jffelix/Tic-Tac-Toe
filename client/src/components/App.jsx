import React, { useEffect, useState } from "react";
import Axios from "axios";
import Board from "./Board.jsx";

const App = () => {

    useEffect(() => {
        getTitle();
        changeTurn();
    }, []);

    let [ appTitle, setAppTitle ] = useState("");
    let [ currentTurn, setCurrentTurn ] = useState(null);

    const getTitle = () => {
        Axios.get("/title")
        .then(response => {
            setAppTitle(response.data);
        })
        .catch(err => {
            console.log('Error received during Axios GET request');
        })
    }

    const changeTurn = () => {
        if (currentTurn === "X") {
            setCurrentTurn("O");
        } else {
            setCurrentTurn("X");
        }
    }

    return (
        <div>
            <h1 className="title">{appTitle}</h1>
            <h2>Current Turn: {currentTurn}</h2>
            <Board
              currentTurn={currentTurn}
              changeTurn={changeTurn}
              />
        </div>
    )

}

export default App;