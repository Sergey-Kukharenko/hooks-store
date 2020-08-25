import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

import carts from './carts';
import basket from './basket';
import cart from './cart';
import auth from './auth';

export default history => combineReducers({
  auth,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  carts,
  cart,
  basket,
  router: connectRouter(history)
});
