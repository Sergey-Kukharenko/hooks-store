import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Registration from "./pages/Registration";

export default (
    <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/carts/:id' component={Detail} exact/>
        <Route path='/basket' component={Basket} exact/>
        <Route path='/registration' component={Registration} exact/>
    </Switch>
)
