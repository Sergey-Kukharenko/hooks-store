import {
    FETCH_FAILURE,
    FETCH_START,
    FETCH_SUCCESS,
    LOAD_MORE_FETCH_FAILURE,
    LOAD_MORE_FETCH_START,
    LOAD_MORE_FETCH_SUCCESS,
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    CLEAN_BASKET
} from './types';
import {fetchApi, loadMoreApi} from '../api';
import {getRenderedPhonesLength} from '../selectors';

export const fetchPhones = () => async dispatch => {
    dispatch({
        type: FETCH_START
    });

    try {
        const payload = await fetchApi();
        dispatch({
            type: FETCH_SUCCESS,
            payload
        })
    } catch (err) {
        dispatch({
            type: FETCH_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const loadMorePhones = () => async (dispatch, getState) => {
    const offset = getRenderedPhonesLength(getState());
    dispatch({
        type: LOAD_MORE_FETCH_START
    });

    try {
      const phones = await loadMoreApi({offset});
        dispatch({
            type: LOAD_MORE_FETCH_SUCCESS,
            payload: phones
        })
    } catch (err) {
        dispatch({
            type: LOAD_MORE_FETCH_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const addToBasket = id => dispatch => {
    dispatch({
        type: ADD_TO_BASKET,
        payload: id
    });
};

export const removeFromBasket = id => dispatch => {
    dispatch({
        type: REMOVE_FROM_BASKET,
        payload: id
    })
};

export const cleanBasket = () => dispatch => {
    dispatch({
        type: CLEAN_BASKET
    })
};
