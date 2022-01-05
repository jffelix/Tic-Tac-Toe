import { set } from "lodash";
import React, { useEffect, useState } from "react";
import FirstRow from "./rows/FirstRow.jsx";
import SecondRow from "./rows/SecondRow.jsx";
import ThirdRow from "./rows/ThirdRow.jsx";

const Board = (props) => {

    useEffect(() => {
        changeTurn();
    }, []);

    const [ currentTurn, setCurrentTurn ] = useState(null);

    const [ wasWinnerDeclared, setWasWinnerDeclared] = useState(false);
    // const [ wasTieGame, setWasTieGame ] = useState(false);
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

    const changeTurn = () => {
        if (currentTurn === "X") {
            setCurrentTurn("O");
        } else {
            setCurrentTurn("X");
        }
    }

    const markBox = () => {
        if (currentTurn === "X") {
            changeTurn();
        } else {
            changeTurn();
        }
    }

    const resetGame = () => {
        setA1(null);
        setA2(null);
        setA3(null);
        setB1(null);
        setB2(null);
        setB3(null);
        setC1(null);
        setC2(null);
        setC3(null);
    }

    return (
        <div>
            <div>
                <h2>Current Turn: {currentTurn}</h2>
            </div>
            <div className="firstRow">
                <FirstRow 
                    a1={a1} 
                    setA1={setA1}
                    a2={a2}
                    setA2={setA2}
                    a3={a3}
                    setA3={setA3}
                    markBox={markBox} 
                    currentTurn={currentTurn}
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
                    currentTurn={currentTurn}
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
                    currentTurn={currentTurn}
                />
            </div>
            {
                a1 && a1 === a2 && a1 === a3 ||
                b1 && b1 === b2 && b1 === b3 ||
                c1 && c1 === c2 && c1 === c3 ||
                a1 && a1 === b1 && a1 === c1 ||
                a2 && a2 === b2 && a2 === c2 ||
                a3 && a3 === b3 && a3 === c3 ||
                a1 && a1 === b2 && a1 === c3 ||
                a3 && a3 === b2 && a3 === c1
                ?
                <div>
                    <h3>Player Wins!</h3>
                    <h4>Try Again?</h4>
                    <button onClick={resetGame}>Reset</button>
                </div> : null
            }
            {
                a1 && a2 && a3 &&
                b1 && b2 && b3 &&
                c1 && c2 && c3 && 
                (
                    (a1 !== a2 || a1 !== a3) &&
                    (b1 !== b2 || b1 !== b3) &&
                    (c1 !== c2 || c1 !== c3) &&
                    (a1 !== b1 || a1 !== c1) &&
                    (a2 !== b2 || a2 !== c2) &&
                    (a3 !== b3 || a3 !== c3) &&
                    (a1 !== b2 || a1 !== c3) &&
                    (a3 !== b2 || a3 !== c1)

                )
                ?
                <div>
                    <h3>Tie!</h3>
                    <h4>Try Again?</h4>
                    <button onClick={resetGame}>Reset</button>
                </div> : null
            }
        </div>
    )
}

export default Board;



// BACKUP CODE FOR SETSTATE

    // const checkForWinner = () => {

    //     // for horizontal wins
    //     if (a1 && a1 === a2 && a1 === a3) {
    //         setWasWinnerDeclared(true);
    //     }
    //     if (b1 && b1 === b2 && b1 === b3) {
    //         setWasWinnerDeclared(true);
    //     }
    //     if (c1 && c1 === c2 && c1 === c3) {
    //         setWasWinnerDeclared(true);
    //     }

    //     // for vertical wins
    //     if (a1 && a1 === b1 && a1 === c1) {
    //         setWasWinnerDeclared(true);
    //     }
    //     if (a2 && a2 === b2 && a2 === c2) {
    //         setWasWinnerDeclared(true);
    //     }
    //     if (a3 && a3 === b3 && a3 === c3) {
    //         setWasWinnerDeclared(true);
    //     }

    //     // for diagonal wins
    //     if (a1 && a1 === b2 && a1 === c3) {
    //         setWasWinnerDeclared(true); 
    //     }
    //     if (a3 && a3 === b2 && a3 === c1) {
    //         setWasWinnerDeclared(true);  
    //     }
    // }


// NO MATCH CONDITIONAL

    // (
    //     (a1 !== a2 || a1 !== a3) ||
    //     (b1 !== b2 || b1 !== b3) ||
    //     (c1 !== c2 || c1 !== c3) ||
    //     (a1 !== b1 || a1 !== c1) ||
    //     (a2 !== b2 || a2 !== c2) ||
    //     (a3 !== b3 || a3 !== c3) ||
    //     (a1 !== b2 || a1 !== c3) ||
    //     (a3 !== b2 || a3 !== c1)
    // )