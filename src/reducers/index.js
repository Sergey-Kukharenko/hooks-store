import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
// import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

import carts from './carts';
import basket from './basket';
import cart from './cart';
import auth from './auth';
import shared from './shared';

export default history => combineReducers({
  // firestore: firestoreReducer,
  firebase: firebaseReducer,
  shared,
  auth,
  carts,
  cart,
  basket,
  router: connectRouter(history)
});
