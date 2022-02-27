const setContent = (id) => {
    return {
        type: 'SET_CONTENT',
        payload: id
    }
}

const clearContent = () => {
    return {
        type: 'CLEAR_CONTENT'
    }
}


const onError = () => {
    return {
        type: 'ON_ERROR'
    }
}

export {
    setContent,
    clearContent,
    onError
};