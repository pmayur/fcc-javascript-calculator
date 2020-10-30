import React from "react";

import "./Display.css";

class Display extends React.Component {
    render() {
        return (
            <div id="display">
                <div id="total"></div>
                <div id="equation">
                    <div id="input"></div>
                    <div id="clearSection">
                        <div id="clear">C</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Display;
