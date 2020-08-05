import {
    ActionPhones
} from '../constants'

// The initial application state
let initialState = {
    phoneList: [],
    loaded: false,
    error: undefined,
    pending: false
}

// Takes care of changing the application state
export function phones(state = initialState, action) {

    switch (action.type) {
        case ActionPhones.GET_ALL_PHONES_PENDING:
            return { ...state, pending: true }
        case ActionPhones.GET_ALL_PHONES_SUCCESS:
            return {
                ...state,
                phoneList: action.payload.phoneList,
                pending: false,
                loaded: true
            }
        case ActionPhones.GET_ALL_PHONES_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                pending: false
            }
        default:
            return state
    }
}