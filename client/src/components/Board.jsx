import React, { useEffect, useState } from "react";
import FirstRow from "./rows/FirstRow.jsx";
import SecondRow from "./rows/SecondRow.jsx";
import ThirdRow from "./rows/ThirdRow.jsx";

const Board = (props) => {
    
    return (
        <div>
            <FirstRow changeTurn={props.changeTurn} />
            <SecondRow />
            <ThirdRow />
        </div>
    )
}

export default Board;