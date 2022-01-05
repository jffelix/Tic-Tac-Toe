import React from "react";
import "../../../dist/ThirdRow.css";

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
        <div className="thirdRow">
            {/* <button className="c1" onClick={markC1}>{props.c1}</button>
            <button className="c2" onClick={markC2}>{props.c2}</button>
            <button className="c3" onClick={markC3}>{props.c3}</button> */}
            <div className="c1" onClick={markC1}>
                <span>{props.c1}</span>
            </div>
            <div className="c2" onClick={markC2}>
                <span>{props.c2}</span>
            </div>
            <div className="c3" onClick={markC3}>
                <span>{props.c3}</span>
            </div>
        </div>
    )
}

export default ThirdRow;