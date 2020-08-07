import {removeUniqueArray, updateItem} from '../utils';
import {CLEAN_BASKET, DEC, INC, REMOVE_FROM_BASKET} from '../actions/types';

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type) {

        case INC:
            return updateItem(state, payload, 1)

        case DEC:
            if ((payload.quantity <= 1)) {
                return removeUniqueArray(state, payload);
            }
            return updateItem(state, payload, -1)

        case REMOVE_FROM_BASKET:
            return removeUniqueArray(payload, state);

        case CLEAN_BASKET:
            return initialState;

        default:
            return state;
    }
};
