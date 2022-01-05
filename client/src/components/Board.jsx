import { set } from "lodash";
import React, { useEffect, useState } from "react";
import FirstRow from "./rows/FirstRow.jsx";
import SecondRow from "./rows/SecondRow.jsx";
import ThirdRow from "./rows/ThirdRow.jsx";

const Board = (props) => {

    useEffect(() => {
        console.log('Welcome to Tic-Tac-Toe!')
    }, []);

    const [ wasWinnerDeclared, setWasWinnerDeclared] = useState(false);
    const [ wasTieGame, setWasTieGame ] = useState(false);
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
            checkForWinner();
        } else {
            props.changeTurn();
            checkForWinner();
        }
    }
   
    const checkForWinner = () => {

        // for horizontal wins
        if (a1 && a1 === a2 && a1 === a3) {
            setWasWinnerDeclared(true);
        }
        if (b1 && b1 === b2 && b1 === b3) {
            setWasWinnerDeclared(true);
        }
        if (c1 && c1 === c2 && c1 === c3) {
            setWasWinnerDeclared(true);
        }

        // for vertical wins
        if (a1 && a1 === b1 && a1 === c1) {
            setWasWinnerDeclared(true);
        }
        if (a2 && a2 === b2 && a2 === c2) {
            setWasWinnerDeclared(true);
        }
        if (a3 && a3 === b3 && a3 === c3) {
            setWasWinnerDeclared(true);
        }

        // for diagonal wins
        if (a1 && a1 === b2 && a1 === c3) {
            setWasWinnerDeclared(true); 
        }
        if (a3 && a3 === b2 && a3 === c1) {
            setWasWinnerDeclared(true);  
        }
    }
    
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
                    checkForWinner={checkForWinner}
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
                    checkForWinner={checkForWinner}
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
                    checkForWinner={checkForWinner}
                />
            </div>
            {!wasWinnerDeclared ? null: 
                <div>
                    <h3>Winner!</h3>    
                </div>
            }
        </div>
    )
}

export default Board;