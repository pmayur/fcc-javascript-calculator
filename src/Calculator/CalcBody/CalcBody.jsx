import React from "react";

import "./CalcBody.css";

import Button from "../Button/Button";

class CalcBody extends React.Component {
    render() {
        return (
            <div id="CalcBody">
                <div id="num-pad"></div>
                <div id="op-pad"></div>
            </div>
        );
    }
}

export default CalcBody;
