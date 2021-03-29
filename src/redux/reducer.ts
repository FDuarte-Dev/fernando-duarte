import { combineReducers } from "redux";

export interface State {
    page: string;
    theme: string;
}

const initialState: State = {
    page: 'home',
    theme: 'light'
}

export const reducer = function (state = initialState, action: any) {
    switch (action.type) {
        case "CHANGE_PAGE":
            return {
                ...state,
                page: action.page
            }
        case "CHANGE_THEME":
            return {
                ...state,
                theme: action.theme
            }
        default:
            return state;
    }
}

export default combineReducers({reducer});