import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/layout';
import {Store} from "./store";

ReactDOM.render(
    <Store>
        <Layout/>
    </Store>,
    document.getElementById('root')
)
