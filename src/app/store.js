import {
  combineReducers,
  createStore
} from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

import {
  composeWithDevTools
} from 'redux-devtools-extension';
let reducers = combineReducers({
  productReducer,
  cartReducer
})

const store = () => {
console.log('storeeee');
  return createStore(reducers, composeWithDevTools());

}

export default store();