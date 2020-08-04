import React from 'react';

import {useSelector} from "react-redux";

import {getTotalBasketCount} from '../selectors'

const Header = () => {
    const {totalBasketCount} = useSelector(state => ({
        totalBasketCount: getTotalBasketCount(state)
    }))

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="navbar-brand">
                    <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="30"
                         alt="mdb logo"/>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
                        aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="basicExampleNav1">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="nav-link navbar-link-2 waves-effect">
                                <span className="badge badge-pill red">{totalBasketCount}</span>
                                <i className="fas fa-shopping-cart pl-0"></i>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link waves-effect">
                                Shop
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link waves-effect">
                                Contact
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link waves-effect">
                                Sign in
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
