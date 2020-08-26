import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';
import App from './App';
import './index.scss'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares),

    )
)
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
