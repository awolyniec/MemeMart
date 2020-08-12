import { combineReducers } from 'redux';

import productReducer from './products/reducer';
import reviewReducer from './reviews/reducer';

export default combineReducers({
  products: productReducer,
  reviews: reviewReducer
});