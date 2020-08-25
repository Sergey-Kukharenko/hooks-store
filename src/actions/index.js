import {
    ADD_TO_BASKET,
    CHANGE_QUANTITY,
    CLEAN_BASKET,
    DEC,
    FETCH_BY_ID_FAILURE,
    FETCH_BY_ID_START,
    FETCH_BY_ID_SUCCESS,
    FETCH_FAILURE,
    FETCH_START,
    FETCH_SUCCESS,
    INC,
    LOAD_MORE_FETCH_FAILURE,
    LOAD_MORE_FETCH_START,
    LOAD_MORE_FETCH_SUCCESS,
    REMOVE_FROM_BASKET
} from './types';
import {fetchApi, fetchByIdApi, loadMoreApi} from '../api';
import {getRenderedPhonesLength} from '../selectors';

export const fetch = () => async dispatch => {
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

export const addToBasket = item => dispatch => {
    dispatch({
        type: ADD_TO_BASKET,
        payload: item
    });
};

export const removeFromBasket = item => dispatch => {
    dispatch({
        type: REMOVE_FROM_BASKET,
        payload: item
    })
};

export const increment = item => dispatch => {
    dispatch({
        type: INC,
        payload: item
    })
};

export const changeQuantity = item => dispatch => {
    dispatch({
        type: CHANGE_QUANTITY,
        payload: item
    })
};

export const decrement = item => dispatch => {
    dispatch({
        type: DEC,
        payload: item
    })
};

export const cleanBasket = () => dispatch => {
    dispatch({
        type: CLEAN_BASKET
    })
};

export const fetchById = (id) => async dispatch => {
    dispatch({type: FETCH_BY_ID_START});

    try {
        const payload = await fetchByIdApi(id);
        dispatch({
            type: FETCH_BY_ID_SUCCESS,
            payload: payload
        })
    } catch (err) {
        dispatch({
            type: FETCH_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });

    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err});
        });
    }
}
