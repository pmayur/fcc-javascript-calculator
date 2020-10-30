import React from "react";

import "./CalcBody.css";

import Button from "../Button/Button";

class CalcBody extends React.Component {
    constructor(props) {
        super();

        this.state = {
            numButtons: {
                seven: "7",
                eight: "8",
                nine: "9",

                four: "4",
                five: "5",
                six: "6",

                one: "1",
                two: "2",
                three: "3",

                zero: "0",
                decimal: ".",
                equals: "=",
            },

            opButtons: {
                multiply: "*",
                divide: "/",
                subtract: "-",
                add: "+",
            },
        };
    }

    render() {

        

        let numButtons = Object.keys(this.state.numButtons).map( (key) => {
            return <Button id={key} buttonText={this.state.numButtons[key]} />
        });

        let opButtons = Object.keys(this.state.opButtons).map( (key) => {
            return <Button id={key} buttonText={this.state.opButtons[key]} />
        });

        return (
            <div id="CalcBody">
                <div id="num-pad">
                    {numButtons}
                </div>
                <div id="op-pad">
                    {opButtons}
                </div>
            </div>
        );
    }
}

export default CalcBody;
