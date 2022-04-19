const initialState = {
    content: [],
    comments: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CONTENT':
            let array = state.content;
            array.push(action.payload)
            return {
                ...state,
                content: array.sort( (a, b) => a.time - b.time ).reverse()
            };
        case 'CLEAR_CONTENT':
        return {
            ...state,
            content: []
        };
        case 'SET_COMMENTS':
            let arr = state.comments;
            arr.push(action.payload)
            return {
                ...state,
                comments: array.sort( (a, b) => a.time - b.time ).reverse()
            };
        case 'CLEAR_COMMENTS':
        return {
            ...state,
            comments: []
        };
        case 'ON_ERROR':
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}

export default reducer;