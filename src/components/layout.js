import React from 'react'
import {Route, Switch} from 'react-router'

import Home from '../pages/Home'

const routes = (
    <Switch>
        <Route path='/' component={Home} exact/>
    </Switch>
)

const Layout = () => (
    <div className="col-lg-12">
        {routes}
    </div>
)

export default Layout;
