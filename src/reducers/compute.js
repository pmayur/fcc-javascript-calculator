export default function compute(state, action, initialState) {
    let equation = state.equation;
    let operator = state.operator;
    let secondary = state.secondary;
    let value = state.value;
    let total = state.total;

    equation = equation.concat(operator);
    equation = equation.concat(secondary);
    equation = equation.concat(value);

    total = eval(equation);

    equation = equation.concat(" = " + total);
    value = "".concat(total);

    state = initialState;

    return Object.assign({}, state, { value, equation, total });
}
