export interface State {
    page: string;
}

const initialState: State = {
    page: 'home'
}

export const reducer = function (state = initialState, action: {type: string, page: string}) {
    switch (action.type) {
        case "CHANGE_PAGE":
            return {
                ...state,
                page: action.page
            }
        default:
            return state;
    }
}
