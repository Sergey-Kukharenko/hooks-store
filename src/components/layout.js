import React, {Fragment} from 'react'

import Header from "./header";

import routes from "../routes";
import Basket from "../pages/Basket";

const Layout = () => (
    <Fragment>
        <Header/>
        <div className="col-lg-12">
            {routes}
        </div>
    </Fragment>
)

export default Layout;
