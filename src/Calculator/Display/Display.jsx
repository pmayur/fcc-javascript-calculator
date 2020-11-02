import React from "react";

import "./Display.css";

import { useSelector, useDispatch } from "react-redux";
import { clear } from "../../actions";

function Display() {
    const value     = useSelector((state) => state.value);
    const total     = useSelector((state) => state.total);
    const operator  = useSelector((state) => state.operator);
    const equation  = useSelector((state) => state.equation);
    const secondary = useSelector((state) => state.secondary);

    const dispatch = useDispatch();

    return (
        <div id="displayPad">
            
            <div id="total">
                {equation}
                {" " + operator + " "}
                {total === "" && value !== "0" ? secondary + value : ""}
            </div>

            <div id="equation">
                <div id="display">
                    {secondary}
                    {value}
                </div>
                
                <div id="clearSection">
                    <div id="clear" onClick={() => dispatch(clear())}>
                        C
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Display;
