import React, {useState} from 'react';

import {useSelector} from "react-redux";

import {getTotalBasketCount} from '../selectors'
import {Link} from "react-router-dom";

const Header = () => {

    const {totalBasketCount} = useSelector(state => ({
        totalBasketCount: getTotalBasketCount(state),
    }))

    const [state, setState] = useState(false);

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

                            <Link
                                className="nav-link navbar-link-2 waves-effect"
                                to={'/basket'}
                            >
                                <span className="badge badge-pill red">{totalBasketCount}</span>
                                <i className="fas fa-shopping-cart pl-0"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link waves-effect">
                                Shop
                            </div>
                        </li>
                        <li className="nav-item pl-2 mb-2 mb-md-0">
                            <div
                               className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign
                                up</div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
