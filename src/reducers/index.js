import changeValue from "./changeValue";
import changeOperator from "./changeOperator";
import compute from "./compute";

const initialState = {
    equation: "",
    operator: "",
    secondary: "",
    value: "0",
    total: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_VALUE": {
            return changeValue(state, action);
        }

        case "CHANGE_OPERATOR": {
            return changeOperator(state, action);
        }

        case "COMPUTE": {
            return compute(state, action, initialState);
        }

        case "CLEAR": {
            return initialState;
        }

        default: {
            return state;
        }
    }
};
