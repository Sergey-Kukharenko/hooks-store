import React, {useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {getTotalBasketCount} from '../selectors'
import {Link} from "react-router-dom";
import {signOut} from "../actions/auth";

const Header = () => {

    const {totalBasketCount} = useSelector(state => ({
        totalBasketCount: getTotalBasketCount(state),
    }))

    const [state, setState] = useState(false);

    const dispatch = useDispatch();

    const toggle = () => setState(!state);

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light fixed-top scrolling-navbar">
                <Link to="/" className="navbar-brand">
                    <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="30"
                         alt="mdb logo"/>
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={state ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {
                                !(totalBasketCount === 0)
                                &&
                                <Link
                                    className="nav-link navbar-link-2 waves-effect"
                                    to={'/basket'}
                                >
                                    <span className="badge badge-pill red">{totalBasketCount}</span>
                                    <i className="fas fa-shopping-cart pl-0"></i>
                                </Link>
                            }

                        </li>
                        <li className="nav-item">
                            <div className="nav-link waves-effect">
                                Shop
                            </div>
                        </li>
                        <li className="nav-item pl-2 mb-2 mb-md-0">
                            <Link
                                className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"
                                to={'/sign-up'}
                            >
                                Sign up
                            </Link>
                        </li>
                        <li className="nav-item pl-2 mb-2 mb-md-0">
                            <Link
                                className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"
                                to={'/sign-in'}
                            >
                                Sign in
                            </Link>
                        </li>
                        <li className="nav-item pl-2 mb-2 mb-md-0">
                            <a
                                className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"
                                onClick={() => {dispatch(signOut())}}
                            >
                                Sign Out
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
