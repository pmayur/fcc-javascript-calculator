import React from "react";

import "./Display.css";

import { useSelector } from "react-redux";

function Display() {
    const value = useSelector((state) => state.value);

    return (
        <div id="display">
            <div id="total"></div>
            <div id="equation">
                <div id="input">{value}</div>
                <div id="clearSection">
                    <div id="clear">C</div>
                </div>
            </div>
        </div>
    );
}

export default Display;
