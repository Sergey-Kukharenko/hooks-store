import {CLEAR_ERROR, ERROR, LOADING} from "./types";

export const loading = payload => async dispatch => {
    dispatch({
        type: LOADING,
        payload: payload
    });
};

export const error = payload => async dispatch => {
    dispatch({
        type: ERROR,
        payload: payload
    });
};

export const clearError = payload => async dispatch => {
    dispatch({
        type: CLEAR_ERROR,
        payload: payload
    });
};
