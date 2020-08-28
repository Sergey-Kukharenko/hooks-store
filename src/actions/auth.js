// Signing up with Firebase
import firebase from "../services/firebase";
import {
    AUTO_SIGNIN_ERROR,
    AUTO_SIGNIN_SUCCESS,
    CLEAR_ERROR,
    ERROR,
    LOADING,
    RESET_ERROR,
    RESET_SUCCESS,
    SIGNIN_ERROR,
    SIGNIN_SUCCESS,
    SIGNOUT_ERROR,
    SIGNOUT_SUCCESS,
    SIGNUP_SUCCESS
} from "./types";

export const signUp = (email, password) => async dispatch => {
    dispatch({type: CLEAR_ERROR, payload: null});
    dispatch({type: LOADING, payload: true});
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: {email, password}
        });
        dispatch({
            type: LOADING,
            payload: false
        });
    } catch (error) {
        dispatch({type: LOADING, payload: false});
        dispatch({type: ERROR, payload: error.message});
    }
};

// Signing in with Firebase
export const signIn = (email, password) => async dispatch => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        dispatch({
            type: SIGNIN_SUCCESS,
            payload: {email, password}
        })
    } catch (error) {
        dispatch({type: SIGNIN_ERROR, payload: "Invalid login credentials"});
        throw error
    }
};

// Signing out with Firebase
export const signOut = () => async dispatch => {
    try {
        await firebase.auth().signOut()
        dispatch({type: SIGNOUT_SUCCESS, payload: null})
    } catch (error) {
        dispatch({
            type: SIGNOUT_ERROR,
            payload: "...some error message for the user..."
        });
        throw error
    }
};

// Reset password with Firebase
export const resetPassword = email => async dispatch => {
    try {
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() =>
                dispatch({
                    type: RESET_SUCCESS,
                    payload: "Reset email sent. Go check your inbox."
                })
            )
            .catch(err => {
                dispatch({
                    type: RESET_ERROR,
                    payload: "...some message for the user..."
                });
            });
    } catch (err) {
        dispatch({
            type: RESET_ERROR,
            payload: "...some message for the user..."
        });
    }
};

export const autoSignIn = payload => async dispatch => {
    try {
        dispatch({
            type: AUTO_SIGNIN_SUCCESS,
            payload
        })
    } catch (err) {
        dispatch({
            type: AUTO_SIGNIN_ERROR,
            payload: err,
            error: true
        })
    }
};
