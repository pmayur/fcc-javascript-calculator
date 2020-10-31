import React from "react";
import "./Button.css";

import { useDispatch } from "react-redux";
import { changeValue } from "../../actions";
import { PADTYPE } from '../../utilities'

function Button(props) {
    const dispatch = useDispatch();

    return (
        <div
            className="Button"
            id={props.id}
            onClick={() => dispatch(changeValue(props.buttonText))}
        >
            {props.buttonText}
        </div>
    );
}

export default Button;
