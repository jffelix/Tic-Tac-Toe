import React from "react";

const ThirdRow = (props) => {

    const markA1 = () => {
        if (props.a1 !== null) {
            return;
        }

        props.setA1(props.currentTurn);
        props.markBox();
    }

    const markA2 = () => {
        if (props.a2 !== null) {
            return;
        }

        props.setA2(props.currentTurn);
        props.markBox();
    }

    const markA3 = () => {
        if (props.a3 !== null) {
            return;
        }

        props.setA3(props.currentTurn);
        props.markBox();
    }

    return (
        <div>
            <button className="a1" onClick={markA1}>{props.a1}</button>
            <button className="a2" onClick={markA2}>{props.a2}</button>
            <button className="a3" onClick={markA3}>{props.a3}</button>
        </div>
    )
}

export default ThirdRow;