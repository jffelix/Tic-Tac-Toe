import { set } from "lodash";
import React, { useEffect, useState } from "react";

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

    // need to identify which button is being clicked

    const markBox = () => {
        if (props.currentTurn === "X") {
            props.changeTurn();
        } else {
            props.changeTurn();
        }
    }

    const markA1 = () => {
        if (a1 !== null) {
            return;
        }
        setA1(props.currentTurn);
        markBox();
    }

    const markA2 = () => {
        if (a2 !== null) {
            return;
        }
        setA2(props.currentTurn);
        markBox();
    }

    const markA3 = () => {
        if (a3 !== null) {
            return;
        }
        setA3(props.currentTurn);
        markBox();
    }
    
    return (
        <div>
            <button id="A1" onClick={markA1}>{a1}</button>
            <button id="A2" onClick={markA2}>{a2}</button>
            <button id="A3" onClick={markA3}>{a3}</button>
        </div>
    )
}

export default Board;