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
        <div className="secondRow">
            <div className="b1" onClick={markB1}>
                <span>{props.b1}</span>
            </div>
            <div className="b2" onClick={markB2}>
                <span>{props.b2}</span>
            </div>
            <div className="b3" onClick={markB3}>
                <span>{props.b3}</span>
            </div>
        </div>
    )
}

export default SecondRow;