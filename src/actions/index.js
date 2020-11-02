export const changeValue = (value) => {
    return {
        type: 'CHANGE_VALUE',
        value
    }
}

export const changeOperator = (operator) => {
    return {
        type: 'CHANGE_OPERATOR',
        operator
    }
}

export const compute = () => {
    return {
        type: 'COMPUTE'
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}