import React, { useEffect } from "react";
import "./Button.css";

import { useDispatch } from "react-redux";
import { changeValue, changeOperator, compute } from "../../actions";
import { PADTYPE } from "../../utilities";

function Button(props) {
    const dispatch = useDispatch();

    const operate =
        props.padtype === PADTYPE.NUMPAD
            ? changeValue
            : props.padtype === PADTYPE.OPPAD
            ? changeOperator
            : compute;

    const keyPressHandler = (e) => {
        if (e.key === props.buttonText) {
            dispatch(operate(props.buttonText));
        }
    }

    useEffect(() => {
        document.addEventListener("keypress", keyPressHandler);

        return () => {
            document.removeEventListner("keypress", keyPressHandler);
        };
    });

    

    return (
        <div
            className="Button"
            id={props.id}
            onClick={() => {
                dispatch(operate(props.buttonText));
            }}
            onKeyPress={keyPressHandler}
        >
            {props.buttonText}
        </div>
    );
}

export default Button;
