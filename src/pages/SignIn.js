import React from 'react';

const SignIn = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center min-vh-100">
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-center mt-1 mb-4">Sign In</h5>
                            <form action="#!">
                                <div className="md-form md-outline">
                                    <input type="email" id="1defaultForm-email1" className="form-control"/>
                                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-email1">
                                        Your email
                                    </label>
                                </div>
                                <div className="md-form md-outline">
                                    <input type="password" id="1defaultForm-pass1" className="form-control"/>
                                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass1">
                                        Your password
                                    </label>
                                </div>
                            </form>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <div className="form-check pl-0 mb-3">
                                    <input type="checkbox" className="form-check-input filled-in" id="1new"/>
                                    <label className="form-check-label small text-uppercase card-link-secondary"
                                           htmlFor="new">
                                        Remember me
                                    </label>
                                </div>
                                <p><a href="">Forgot password?</a></p>
                            </div>
                            <div className="text-center pb-2">
                                <button type="submit" className="btn btn-primary mb-4 waves-effect waves-light">Sign in
                                </button>
                                <p>Not a member? <a href="">Register</a></p>
                                <p>or sign in with:</p>
                                <a type="button" className="btn-floating btn-fb btn-sm mr-1 waves-effect waves-light">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a type="button" className="btn-floating btn-tw btn-sm mr-1 waves-effect waves-light">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a type="button" className="btn-floating btn-li btn-sm mr-1 waves-effect waves-light">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a type="button" className="btn-floating btn-git btn-sm waves-effect waves-light">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
