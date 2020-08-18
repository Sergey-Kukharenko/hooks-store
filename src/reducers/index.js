import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import carts from './carts';
import basket from './basket';
import cart from './cart';

export default history => combineReducers({
  carts,
  cart,
  basket,
  router: connectRouter(history)
});
