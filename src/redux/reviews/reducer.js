import types from './types';

const INITIAL_STATE = {
  reviewsByProductId: {},
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_REVIEWS_BY_PRODUCT_ID:
      return {
        ...state,
        reviewsByProductId: action.payload
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
