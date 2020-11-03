import React from "react";
import "./Calculator.css";

import Display from "./Display/Display";
import CalcBody from "./CalcBody/CalcBody";

class Calculator extends React.Component {
    render() {
        return (
            <div id="App">
                <div id="Calculator">
                    <div>
                        <Display />
                    </div>
                    <div>
                        <CalcBody />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
