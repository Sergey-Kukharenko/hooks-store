import {
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    SIGNOUT_SUCCESS,
    SIGNIN_SUCCESS,
    SIGNIN_ERROR,
    AUTO_SIGNIN_SUCCESS
} from "../actions/types";

const initialState = {
    user: null
}

const authReducer = (state = initialState, {type, payload}) => {
    switch(type){

        case SIGNUP_SUCCESS:
            console.log(payload)
            return {
                ...state,
                user: payload
            }

        case SIGNUP_ERROR:
            console.log('SIGNUP_ERROR')
            console.log(payload)
            return {
                ...state,
                error: payload
            }

        case SIGNIN_SUCCESS:
            console.log('login success');
            return {
                ...state,
                user: payload
            }

        case SIGNIN_ERROR:
            console.log('login error');
            return state

        case AUTO_SIGNIN_SUCCESS:
            console.log('AUTO_SIGNIN_SUCCESS');
            return {
                ...state,
                user: payload
            }

        case SIGNOUT_SUCCESS:
            console.log('signout success');
            return {
                ...state,
                user: payload
            };

        default:
            return state
    }
};

export default authReducer;
