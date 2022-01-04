import React, { useEffect, useState } from "react";
import Axios from "axios";

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
        </div>
    )

}

export default App;