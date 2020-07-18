const runAuth= () => {
    return {
        type: 'RUN_AUTH'
    }
}

const runApp= () => {
    return {
        type: 'RUN_APP'
    }
}

const massageError = () => {
    return {
        type: 'MENU_ERROR',
    }
}

const selectBut = (id) => {
    return {
        type: 'SELECT_BUTTONS',
        payload: id
    }
}

const onward = () => {
    return {
        type: 'ONWARD',
    }
}

export {
    runAuth,
    runApp,
    massageError,
    selectBut,
    onward
};