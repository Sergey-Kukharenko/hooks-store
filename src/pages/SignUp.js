import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {checkInputs, isNull} from "../utils";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
import {useInput} from "../hooks";
import {signUp} from "../actions/auth";


const SignUp = () => {

    const emailInput = useInput('')
    const passwordInput = useInput('')
    const confirmPasswordInput = useInput('')

    const isEnabled = checkInputs(emailInput.value, passwordInput.value, confirmPasswordInput.value)

    const clear = () => {
        emailInput.clear();
        passwordInput.clear();
        confirmPasswordInput.clear();
    };

    const {user} = useSelector(state => ({
        user: state.auth.user,
    }))

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(`${emailInput.value}, ${passwordInput.value}`)
        dispatch(signUp(emailInput.value, passwordInput.value))
        clear();
    };

    return (
        !isNull(user)
            ? <Redirect to='/'/>
            : <div className="container">
                <div className="row d-flex align-items-center justify-content-center min-vh-100">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <p className="h4 text-center py-4">Sign up</p>
                                    <div className="md-form md-outline mt-0">
                                        <input
                                            type="text"
                                            id="email"
                                            className="form-control"
                                            value={emailInput.value}
                                            onChange={emailInput.onChange}
                                            onFocus={emailInput.onFocus}
                                            onBlur={emailInput.onBlur}
                                        />
                                        <label
                                            htmlFor="email"
                                            className={(emailInput.focus || emailInput.value.length > 0) ? "active" : null}
                                        >
                                            Email
                                        </label>
                                    </div>
                                    <div className="md-form md-outline mt-0">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            value={passwordInput.value}
                                            onChange={passwordInput.onChange}
                                            onFocus={passwordInput.onFocus}
                                            onBlur={passwordInput.onBlur}
                                        />
                                        <label
                                            htmlFor="password"
                                            className={(passwordInput.focus || passwordInput.value.length > 0) ? "active" : null}
                                        >
                                            Your password
                                        </label>
                                        {
                                            ((passwordInput.focus) && (passwordInput.value.length <= 1)) &&
                                            <small className="form-text text-muted hint">{passwordInput.value.length} of
                                                2</small>
                                        }
                                    </div>
                                    <div className="md-form md-outline mt-0">
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            className="form-control"
                                            value={confirmPasswordInput.value}
                                            onChange={confirmPasswordInput.onChange}
                                            onFocus={confirmPasswordInput.onFocus}
                                            onBlur={confirmPasswordInput.onBlur}
                                        />
                                        <label
                                            htmlFor="confirmPassword"
                                            className={(confirmPasswordInput.focus || confirmPasswordInput.value.length > 0) ? "active" : null}
                                        >
                                            Confirm Your password
                                        </label>
                                    </div>
                                    <div className="text-center mb-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary mb-4"
                                            disabled={!isEnabled}
                                        >
                                            Sign Up
                                        </button>
                                        <p className="d-flex justify-content-center">
                                            <span className="mr-1">Not a member? </span>
                                            <Link to={`/sign-in`}>
                                                Sign in
                                            </Link>
                                        </p>
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
