const initialState = {
    content: [],
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