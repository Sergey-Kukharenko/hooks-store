import {FETCH_BY_ID_SUCCESS, FETCH_SUCCESS, LOAD_MORE_FETCH_SUCCESS} from '../actions/types'
import {merge} from '../utils'

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_SUCCESS:
            return merge(state, payload);

        // case FETCH_BY_ID_SUCCESS:
        //     return merge(state, payload);

        case LOAD_MORE_FETCH_SUCCESS:
            return merge(state, payload);

        default:
            return state
    }

};
