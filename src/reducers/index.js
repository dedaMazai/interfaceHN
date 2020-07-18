const initialState = {
    page: 25,
    buttons: 0,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RUN_AUTH':
            return {
                ...state,
                showApp: 1
            };
        case 'RUN_APP':
            return {
                ...state,
                showApp: 2,
                buttons: 0
            };
        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            };
        case 'SELECT_BUTTONS':
            return {
                ...state,
                buttons: action.payload
            };
        case 'ONWARD':
            return {
                ...state,
                buttons: ++state.buttons
            };
        default:
            return state;
    }
}

export default reducer;