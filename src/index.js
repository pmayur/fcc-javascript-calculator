import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./Calculator/Calculator.jsx";

import { valueReducer } from "./reducers";
import { Provider } from "react-redux";

import { createStore } from "redux";

const store = createStore(valueReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Calculator />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
