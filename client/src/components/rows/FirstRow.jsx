import React from "react";
import "../../../dist/FirstRow.css";

const FirstRow = (props) => {

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
        <div className="firstRow">
            <div className="a1" onClick={markA1}>
                <span>{props.a1}</span>
            </div>
            <div className="a2" onClick={markA2}>
                <span>{props.a2}</span>
            </div>
            <div className="a3" onClick={markA3}>
                <span>{props.a3}</span>
            </div>
        </div>
    )
}

export default FirstRow;