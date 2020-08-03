import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router'

import Home from '../pages/Home'
import Header from "./header";

const routes = (
    <Switch>
        <Route path='/' component={Home} exact/>
    </Switch>
)

const Layout = () => (
    <Fragment>
        <Header/>
        <div className="col-lg-12">
            {routes}
        </div>
    </Fragment>
)

export default Layout;
