import {FETCH_BY_ID_SUCCESS} from '../actions/types';
import {merge} from "../utils";

const initialState = {id: null};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BY_ID_SUCCESS:
            return merge(state, payload);

        default:
            return state;
    }
};
