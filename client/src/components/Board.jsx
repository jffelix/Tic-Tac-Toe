import { set } from "lodash";
import React, { useEffect, useState } from "react";
import FirstRow from "./rows/FirstRow.jsx";
import SecondRow from "./rows/SecondRow.jsx";
import ThirdRow from "./rows/ThirdRow.jsx";

const Board = (props) => {

    const [ wasWinnerDeclared, setWasWinnerDeclared] = useState(false);
    const [ winner, setWinner ] = useState(null);

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
            props.changeTurn();
        } else {
            props.changeTurn();
        }
    }

    // use ternary operators in conditional rendering
      // only render if wasWinnerDeclared is true
      // "{winner} Won!"
    
    return (
        <div>
            <div className="firstRow">
                <FirstRow 
                    a1={a1} 
                    setA1={setA1}
                    a2={a2}
                    setA2={setA2}
                    a3={a3}
                    setA3={setA3}
                    markBox={markBox} 
                    currentTurn={props.currentTurn}
                />
            </div>
            <div className="secondRow">
                <SecondRow 
                    b1={b1} 
                    setB1={setB1}
                    b2={b2}
                    setB2={setB2}
                    b3={b3}
                    setB3={setB3}
                    markBox={markBox} 
                    currentTurn={props.currentTurn}
                />
            </div>
            <div className="thirdRow">
                <ThirdRow 
                    c1={c1} 
                    setC1={setC1}
                    c2={c2}
                    setC2={setC2}
                    c3={c3}
                    setC3={setC3}
                    markBox={markBox} 
                    currentTurn={props.currentTurn}
                />
            </div>
        </div>
    )
}

export default Board;