import {CLEAR_ERROR, ERROR, LOADING} from "../actions/types";

const initialState = {
    loading: false,
    error: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOADING: {
            return {
                ...state,
                loading: payload
            }
        }
        case ERROR: {
            console.log(payload)
            return {
                ...state,
                error: payload
            }
        }

        case CLEAR_ERROR: {
            return {
                ...state,
                error: payload
            }
        }

        default:
            return state

    }
}
