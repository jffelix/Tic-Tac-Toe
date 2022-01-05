import React from "react";
import "../../../dist/SecondRow.css";

const SecondRow = (props) => {

    const markB1 = () => {
        if (props.b1 !== null) {
            return;
        }

        props.setB1(props.currentTurn);
        props.markBox();
    }

    const markB2 = () => {
        if (props.b2 !== null) {
            return;
        }

        props.setB2(props.currentTurn);
        props.markBox();
    }

    const markB3 = () => {
        if (props.b3 !== null) {
            return;
        }

        props.setB3(props.currentTurn);
        props.markBox();
    }

    return (
        <div>
            <button className="b1" onClick={markB1}>{props.b1}</button>
            <button className="b2" onClick={markB2}>{props.b2}</button>
            <button className="b3" onClick={markB3}>{props.b3}</button>
        </div>
    )
}

export default SecondRow;