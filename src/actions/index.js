const selectBut = (id) => {
    return {
        type: 'SELECT_BUTTONS',
        payload: id
    }
}

export {
    selectBut
};