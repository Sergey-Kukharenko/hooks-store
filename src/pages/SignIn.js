import React, {useState} from 'react';
import {signIn} from "../actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {isNull} from "../utils";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
import {MDBBtn} from "mdbreact";

const SignIn = () => {

    // const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [userNameFocus, setUserNameFocus] = useState(false);
    const [userEmailFocus, setUserEmailFocus] = useState(false);
    const [userPasswordFocus, setUserPasswordFocus] = useState(false);

    const isValidEmail = email =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );

    const isEnabled = email.length > 0 && isValidEmail(email) > 0 && password.length > 1;

    const clear = () => {
        // setUserName('');
        setEmail('');
        setPassword('');
    };

    const {user} = useSelector(state => ({
        user: state.auth.user
    }))

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(signIn(email, password))

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
                                    <p className="h4 text-center py-4">Sign in</p>
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
                                            ((userPasswordFocus) && (password.length <= 1)) &&
                                            <small className="form-text text-muted hint">{password.length} of 2</small>
                                        }
                                    </div>
                                    <div className="text-center mb-2">
                                        {/*<button*/}
                                        {/*    type="submit"*/}
                                        {/*    className="btn btn-primary mb-4"*/}
                                        {/*    disabled={!isEnabled}*/}
                                        {/*>*/}
                                        {/*    Sign Up*/}
                                        {/*</button>*/}
                                        <MDBBtn
                                            type="submit"
                                            color="primary"
                                            className="mb-4"
                                            disabled={!isEnabled}
                                        >
                                            Click
                                        </MDBBtn>
                                        <p className="d-flex justify-content-center">
                                            <span className="mr-1">Not a member? </span>
                                            <Link to={`/sign-up`}>
                                                Sign up
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

export default SignIn;
