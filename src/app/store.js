// import { configureStore } from '@reduxjs/toolkit';
// // import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     productReducer,
//   },
// });

import {
  combineReducers,
  createStore
} from 'redux';
import productReducer from './productReducer';

import {
  composeWithDevTools
} from 'redux-devtools-extension';
// let reducers = combineReducers({
//     counter: counter,
//     // campaigns: campaigns
// })
let reducers = combineReducers({
  productReducer
})

const store = () => {
console.log('storeeee');
  return createStore(reducers, composeWithDevTools());

}

export default store();