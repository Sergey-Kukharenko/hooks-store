// Signing up with Firebase
import firebase from "../services/firebase";
import {
    AUTO_SIGNIN_ERROR,
    AUTO_SIGNIN_SUCCESS,
    RESET_ERROR,
    RESET_SUCCESS,
    SIGNIN_ERROR,
    SIGNIN_SUCCESS,
    SIGNOUT_ERROR,
    SIGNOUT_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS
} from "./types";

export const signUp = (email, password) => async dispatch => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: {email, password}
        });
    } catch (error) {
        dispatch({
            type: SIGNUP_ERROR,
            payload:
                "Something went wrong, we couldn't create your account. Please try again."
        });
        throw error
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

export const autoSignIn = (payload) => async dispatch => {
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
