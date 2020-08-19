import React from 'react';
import ReactDOM from 'react-dom';

import {Store} from "./store";
import Layout from "./components/layout";
import './index.scss'

ReactDOM.render(
    <Store>
        <Layout/>
    </Store>,
    document.getElementById('root')
)
