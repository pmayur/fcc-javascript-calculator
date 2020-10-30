import React from 'react';
import './Calculator.css'

import Display from './Display/Display'
import CalcBody from './CalcBody/CalcBody'

class Calculator extends React.Component {
    render() {
        return (
            <div id="App">
                <div id="Calculator">
                    <Display />
                    <CalcBody />
                </div>
            </div>
        )
    }
}

export default Calculator;