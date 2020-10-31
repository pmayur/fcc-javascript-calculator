import React from "react";

import "./CalcBody.css";

import Button from "../Button/Button";

import { numButtons, opButtons, PADTYPE } from "../../utilities";

function CalcBody() {
    let numButtonsArray = Object.keys(numButtons).map((key) => {
        return (
            <Button
                id={key}
                key={key}
                buttonText={numButtons[key]}
                padtype={PADTYPE.NUMPAD}
            />
        );
    });

    let opButtonsArray = Object.keys(opButtons).map((key) => {
        return (
            <Button
                id={key}
                key={key}
                buttonText={opButtons[key]}
                padtype={PADTYPE.OPPAD}
            />
        );
    });

    return (
        <div id="CalcBody">
            <div id="num-pad">{numButtonsArray}</div>
            <div id="op-pad">{opButtonsArray}</div>
        </div>
    );
}

export default CalcBody;
