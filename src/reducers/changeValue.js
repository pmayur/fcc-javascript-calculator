export default function changeValue(state, action) {
    let equation = state.equation;
    let operator = state.operator;
    let secondary = state.secondary;
    let value = state.value;
    let total = state.total;

    if (total !== "") {
        equation = "";
        total = "";
        value = "0";
    }

    if (value !== "") {
        equation = equation.concat(" " + operator + " ");
        equation = equation.concat(secondary + " ");
        operator = "";
        secondary = "";
    }

    switch (action.value) {
        case ".": {
            if (!value.includes(".")) {
                value = value.concat(action.value);
            }
            break;
        }
        case "0": {
            if (value !== "0") {
                value = value.concat(action.value);
            }
            break;
        }
        default: {
            if (value === "0") {
                value = "";
            }
            value = value.concat(action.value);
        }
    }
    return Object.assign({}, state, {
        equation,
        operator,
        value,
        total,
        secondary,
    });
}
