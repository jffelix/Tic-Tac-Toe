import React, { useEffect, useState } from "react";
import FirstRow from "./rows/FirstRow.jsx";
import SecondRow from "./rows/SecondRow.jsx";
import ThirdRow from "./rows/ThirdRow.jsx";

const Board = (props) => {

    const [ a1, setA1 ] = useState(null);
    const [ a2, setA2 ] = useState(null);
    const [ a3, setA3 ] = useState(null);

    const [ b1, setB1 ] = useState(null);
    const [ b2, setB2 ] = useState(null);
    const [ b3, setB3 ] = useState(null);

    const [ c1, setC1 ] = useState(null);
    const [ c2, setC2 ] = useState(null);
    const [ c3, setC3 ] = useState(null);

    const markBox = () => {
        if (props.currentTurn === "X") {
            return "X";
        } else {
            return "Y";
        }
    }
    
    return (
        <div>
            <FirstRow 
              currentTurn={props.currentTurn}
              changeTurn={props.changeTurn} />
            <SecondRow />
            <ThirdRow />
        </div>
    )
}

export default Board;