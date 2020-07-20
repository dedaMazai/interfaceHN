const initialState = {
    content: [
        { id: 1, name: 'Re' },
        { id: 2, name: 'Air' },
        { id: 3, name: 'Doc' },
        { id: 4, name: 'Memento' },
        { id: 5, name: 'Braveheart' },
        { id: 6, name: 'Beauty' },
        { id: 7, name: 'Seven' },
        { id: 8, name: 'Beauty' },
        { id: 9, name: 'Seven' },
        { id: 10, name: 'Beauty' },
        { id: 11, name: 'Seven' },
        { id: 12, name: 'Beauty' },
        { id: 13, name: 'Seven' }
    ],
    pageSize: 10,
    paginatorCount: 1,
    totalCount: 115,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_BUTTONS':
            return {
                ...state,
                paginatorCount: action.payload
            };
        case 'UP_BUTTONS':
            return {
                ...state,
                paginatorCount: state.paginatorCount < action.payload ? state.paginatorCount+1 : state.paginatorCount
            };
        case 'UP_BUTTONS_THREE':
            return {
                ...state,
                paginatorCount: state.paginatorCount < action.payload-4 ? state.paginatorCount+3 : state.paginatorCount
            };
        case 'LOWER_BUTTONS':
            return {
                ...state,
                paginatorCount: state.paginatorCount > 1 ? state.paginatorCount-1 : state.paginatorCount
            };
        case 'LOWER_BUTTONS_THREE':
            return {
                ...state,
                paginatorCount: state.paginatorCount > 5 ? state.paginatorCount-3 : state.paginatorCount
            };
        default:
            return state;
    }
}

export default reducer;