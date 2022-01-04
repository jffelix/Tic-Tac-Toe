import React from "react";

const ThirdRow = (props) => {

    const markC1 = () => {
        if (props.c1 !== null) {
            return;
        }

        props.setC1(props.currentTurn);
        props.markBox();
    }

    const markC2 = () => {
        if (props.c2 !== null) {
            return;
        }

        props.setC2(props.currentTurn);
        props.markBox();
    }

    const markC3 = () => {
        if (props.c3 !== null) {
            return;
        }

        props.setC3(props.currentTurn);
        props.markBox();
    }

    return (
        <div>
            <button onClick={markC1}>{props.c1}</button>
            <button onClick={markC2}>{props.c2}</button>
            <button onClick={markC3}>{props.c3}</button>
        </div>
    )
}

export default ThirdRow;