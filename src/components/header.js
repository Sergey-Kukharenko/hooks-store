import React, {useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {getTotalBasketCount} from '../selectors'
import {Link} from "react-router-dom";
import {signOut} from "../actions/auth";

const Header = () => {

    const {totalBasketCount, user} = useSelector(state => ({
        totalBasketCount: getTotalBasketCount(state),
        user: state.auth.user
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
                        <li className="nav-item mb-2 mb-md-0">
                            {
                                user
                                    ? <div
                                        className="nav-link"
                                        onClick={() => {
                                            dispatch(signOut())
                                        }}
                                    >
                                        <i className="fas fa-sign-out-alt"></i>
                                    </div>

                                    : <Link
                                        className="nav-link"
                                        to={'/sign-in'}
                                    >
                                        <i className="fas fa-user"></i>
                                    </Link>
                            }

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
