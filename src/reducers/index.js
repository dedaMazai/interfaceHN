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
        { id: 13, name: 'Seven' },
        { id: 14, name: 'Samurai' }
    ],
    pageSize: 10,
    paginatorCount: 4,
    totalCount: 44,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_BUTTONS':
            return {
                ...state,
                paginatorCount: action.payload
            };
        default:
            return state;
    }
}

export default reducer;