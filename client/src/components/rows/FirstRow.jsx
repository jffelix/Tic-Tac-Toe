import React, { useState } from "react";

const FirstRow = (props) => {

    // problem: need to identify who's turn it is
    // may need to refer to actions and reducers
    // set a default turn of X or Y

    // if it is X's turn
      // use changeMarkerX
    // if it is Y's turn
      // use changeMarkerY

    return (
        <div>
            <button id="a1" onClick={props.changeTurn}></button>
            <button id="a2"></button>
            <button id="a3"></button>
        </div>
    )
}

export default FirstRow;