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

const setComment = (id) => {
    return {
        type: 'SET_COMMENTS',
        payload: id
    }
}

const clearComment = () => {
    return {
        type: 'CLEAR_COMMENTS'
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
    setComment,
    clearComment,
    onError
};