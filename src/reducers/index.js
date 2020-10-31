const initialState = {
    equation: "",
    operator: "",
    value: "0",
};
export const valueReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_VALUE": {
            let val = state.value;
            if (eval(val) == 0) {
                val = action.value;
            } else {
                val = val.concat(action.value);
            }

            return Object.assign({}, state, { value: val });
        }
        default: {
            return state;
        }
    }
};
