import types from './types';

const INITIAL_STATE = {
  featuredProducts: [],
  products: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_FEATURED_PRODUCTS:
      return {
        ...state,
        featuredProducts: action.payload
      };
    case types.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
