import React, {useState} from 'react';

const Registration = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userNameFocus, setUserNameFocus] = useState(false);
    const [userEmailFocus, setUserEmailFocus] = useState(false);
    const [userPasswordFocus, setUserPasswordFocus] = useState(false);

    const isValidEmail = email =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );

    const isEnabled = email.length > 0 && isValidEmail(email) > 0 && password.length > 1;

    const clear = () => {
        setUserName('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = event => {
        event.preventDefault();
        clear();
    };

    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center min-vh-100">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="md-form md-outline mt-0">
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="form-control"
                                        value={userName}
                                        onChange={event => setUserName(event.target.value)}
                                        onFocus={() => setUserNameFocus(true)}
                                        onBlur={() => setUserNameFocus(false)}
                                    />
                                    <label
                                        htmlFor="firstName"
                                        className={(userNameFocus || userName.length > 0) && "active"}
                                    >
                                        First name
                                    </label>
                                </div>
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
                                        className={(userEmailFocus || email.length > 0) && "active"}
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
                                        className={(userPasswordFocus || password.length > 0) && "active"}
                                    >
                                        Your password
                                    </label>
                                    <small id="materialRegisterFormPasswordHelpBlock"
                                           className="form-text text-muted mb-4">
                                        {password.length} of 2
                                    </small>
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

export default Registration;
