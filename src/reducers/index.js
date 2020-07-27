const initialState = {
    content: [0],
    contributors: [0],
    pageSize: 10,
    paginatorCount: 1,
    totalCount: 10,
    request: "",
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_BUTTONS(PAGINATOR)':
            return {
                ...state,
                paginatorCount: action.payload
            };
        case 'SET_REQUEST':
            return {
                ...state,
                request: action.payload
            };
        case 'SET_CONTENT':
            return {
                ...state,
                content: action.payload,
                totalCount: action.loadCount,
            };
        case 'SET_CONTRIBUTORS':
            return {
                ...state,
                contributors: action.payload
            };
        case 'SET_BEGIN_CONTENT':
            return {
                ...state,
                content: action.payload,
                totalCount: 10,
                paginatorCount: 1
            };
        case 'ON_ERROR':
            return {
                ...state,
                error: true
            };
        case 'UP_BUTTONS(PAGINATOR)':
            return {
                ...state,
                paginatorCount: state.paginatorCount < action.payload ? state.paginatorCount+1 : state.paginatorCount
            };
        case 'UP_BUTTONS_THREE(PAGINATOR)':
            return {
                ...state,
                paginatorCount: state.paginatorCount < action.payload-4 ? state.paginatorCount+3 : state.paginatorCount
            };
        case 'LOWER_BUTTONS(PAGINATOR)':
            return {
                ...state,
                paginatorCount: state.paginatorCount > 1 ? state.paginatorCount-1 : state.paginatorCount
            };
        case 'LOWER_BUTTONS_THREE(PAGINATOR)':
            return {
                ...state,
                paginatorCount: state.paginatorCount > 5 ? state.paginatorCount-3 : state.paginatorCount
            };
        default:
            return state;
    }
}

export default reducer;