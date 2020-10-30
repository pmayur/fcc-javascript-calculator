import React from "react";
import "./Button.css";

class Button extends React.Component {
    render() {
        return (
            <div className="Button" id={this.props.id}>
                {this.props.buttonText}
            </div>
        );
    }
}

export default Button;
