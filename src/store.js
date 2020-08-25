import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';
import React from "react";
import {getFirestore, reduxFirestore} from 'redux-firestore';
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history), thunk.withExtraArgument({getFirebase, getFirestore})]
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares),
        reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
        reduxFirestore(fbConfig) // redux bindings for firestore
    )
)

export const Store = ({children}) => {

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {children}
            </ConnectedRouter>
        </Provider>
        // store.firebaseAuthIsReady.then(() => {
        //     return <Provider store={store}>
        //         <ConnectedRouter history={history}>
        //             {children}
        //         </ConnectedRouter>
        //     </Provider>
        // })
    )

}
