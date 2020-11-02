export default function changeOperator(state, action) {
    let equation = state.equation;
    let operator = state.operator;
    let secondary = state.secondary;
    let value = state.value;
    let total = state.total;

    // handles case for first operator
    if (operator === "" && secondary === "") {
        if (total !== "") {
            equation = "".concat(total);
            total = "";
            value = "0";
        } else {
            equation = equation.concat(value);
            value = "0";
        }
        operator = action.operator;

        return Object.assign({}, state, {
            equation,
            operator,
            secondary,
            value,
            total,
        });

        // handles case for secondary operator
    } else {
        if (operator !== "" && secondary === "") {
            if (action.operator === "+" || action.operator === "-") {
                secondary = action.operator;
            }
        } else if (operator !== "" && secondary !== "") {
            operator = action.operator;
            secondary = "";
        }
        return Object.assign({}, state, {
            equation,
            operator,
            secondary,
            value,
            total,
        });
    }
}
