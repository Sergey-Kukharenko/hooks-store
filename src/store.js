import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';
import React from "react";

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)

export const Store = ({children}) => {

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {children}
            </ConnectedRouter>
        </Provider>
    )

}
