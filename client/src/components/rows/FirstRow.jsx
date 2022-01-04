import React, { useState } from "react";

const FirstRow = (props) => {

    const [ a1, setA1 ] = useState(null);

    return (
        <div>
            <button id="a1" onClick={props.changeTurn}>{a1}</button>
            <button id="a2"></button>
            <button id="a3"></button>
        </div>
    )
}

export default FirstRow;