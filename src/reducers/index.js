import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import carts from './carts';
import basket from './basket';

export default history => combineReducers({
  carts,
  basket,
  router: connectRouter(history)
});
