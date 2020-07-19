const selectBut = (id) => {
    return {
        type: 'SELECT_BUTTONS',
        payload: id
    }
}

const upButtons = (count) => {
    return {
        type: 'UP_BUTTONS',
        payload: count
    }
}

const lowerButtons = () => {
    return {
        type: 'LOWER_BUTTONS'
    }
}

export {
    selectBut,
    upButtons,
    lowerButtons
};