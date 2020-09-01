import {
    SIGNUP_SUCCESS,
    SIGNOUT_SUCCESS,
    SIGNIN_SUCCESS,
    AUTO_SIGNIN_SUCCESS
} from "../actions/types";

const initialState = {
    user: null
}

const authReducer = (state = initialState, {type, payload}) => {
    switch(type){

        case SIGNUP_SUCCESS:
            console.log('SIGNUP_SUCCESS')
            console.log(payload)
            return {
                ...state,
                user: payload
            }

        case SIGNIN_SUCCESS:
            console.log('login success');
            return {
                ...state,
                user: payload
            }

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
