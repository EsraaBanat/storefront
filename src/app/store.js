import {
  combineReducers,
  createStore
} from 'redux';
import productReducer from './productReducer';

import {
  composeWithDevTools
} from 'redux-devtools-extension';
let reducers = combineReducers({
  productReducer
})

const store = () => {
console.log('storeeee');
  return createStore(reducers, composeWithDevTools());

}

export default store();