const operatorCheck = (prev, operator) => {
    if (isNaN(prev.slice(-1))) {
        return prev.slice(0, -1) + operator
    } else {
        return prev + operator
    }
}
const userOperation = {
    operatorCheck
}

export default userOperation