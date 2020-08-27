import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../actions";
import {signUp, signOut} from "../actions/auth";
import {isNull} from "../utils";
import {Redirect} from "react-router";

const SignUp = () => {

    // const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const [userNameFocus, setUserNameFocus] = useState(false);
    const [userEmailFocus, setUserEmailFocus] = useState(false);
    const [userPasswordFocus, setUserPasswordFocus] = useState(false);
    const [userConfirmPasswordFocus, setUserConfirmPasswordFocus] = useState(false);

    const isValidEmail = email =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );

    const isEnabled = email.length > 0 && isValidEmail(email) > 0 && password.length > 1 && (password === confirmPassword);

    const clear = () => {
        // setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };



    const {user} = useSelector(state => ({
        user: state.auth.user
    }))

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(signUp(email, password))

        clear();
    };

    return (

            !isNull(user)
                ?  <Redirect to='/'/>
                : <div className="container">
                    <div className="row d-flex align-items-center justify-content-center min-vh-100">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        {/*<div className="md-form md-outline mt-0">*/}
                                        {/*    <input*/}
                                        {/*        type="text"*/}
                                        {/*        id="firstName"*/}
                                        {/*        className="form-control"*/}
                                        {/*        value={userName}*/}
                                        {/*        onChange={event => setUserName(event.target.value)}*/}
                                        {/*        onFocus={() => setUserNameFocus(true)}*/}
                                        {/*        onBlur={() => setUserNameFocus(false)}*/}
                                        {/*    />*/}
                                        {/*    <label*/}
                                        {/*        htmlFor="firstName"*/}
                                        {/*        className={(userNameFocus || userName.length > 0) ? "active" : null}*/}
                                        {/*    >*/}
                                        {/*        First name*/}
                                        {/*    </label>*/}
                                        {/*</div>*/}
                                        <div className="md-form md-outline mt-0">
                                            <input
                                                type="text"
                                                id="email"
                                                className="form-control"
                                                value={email}
                                                onChange={event => setEmail(event.target.value)}
                                                onFocus={() => setUserEmailFocus(true)}
                                                onBlur={() => setUserEmailFocus(false)}
                                            />
                                            <label
                                                htmlFor="email"
                                                className={(userEmailFocus || email.length > 0) ? "active" : null}
                                            >
                                                Email
                                            </label>
                                        </div>
                                        <div className="md-form md-outline mt-0">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                value={password}
                                                onChange={event => setPassword(event.target.value)}
                                                onFocus={() => setUserPasswordFocus(true)}
                                                onBlur={() => setUserPasswordFocus(false)}
                                            />
                                            <label
                                                htmlFor="password"
                                                className={(userPasswordFocus || password.length > 0) ? "active" : null}
                                            >
                                                Your password
                                            </label>
                                            {
                                                ((userPasswordFocus)&&(password.length <= 1)) &&
                                                <small className="form-text text-muted hint">{password.length} of 2</small>
                                            }
                                        </div>
                                        <div className="md-form md-outline mt-0">
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                className="form-control"
                                                value={confirmPassword}
                                                onChange={event => setConfirmPassword(event.target.value)}
                                                onFocus={() => setUserConfirmPasswordFocus(true)}
                                                onBlur={() => setUserConfirmPasswordFocus(false)}
                                            />
                                            <label
                                                htmlFor="confirmPassword"
                                                className={(userConfirmPasswordFocus || confirmPassword.length > 0) ? "active" : null}
                                            >
                                                Confirm Your password
                                            </label>
                                        </div>
                                        <div className="text-center mb-2">
                                            <button
                                                type="submit"
                                                className="btn btn-primary mb-4 waves-effect waves-light"
                                                disabled={!isEnabled}
                                            >
                                                Sign Up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    );
};

export default SignUp;
