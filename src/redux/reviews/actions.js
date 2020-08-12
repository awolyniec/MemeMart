import types from './types';

export const fetchReviewsByProductId = productIds => ({
  type: types.FETCH_REVIEWS_BY_PRODUCT_ID,
  payload: productIds
});

export const setReviewsByProductId = data => ({
  type: types.SET_REVIEWS_BY_PRODUCT_ID,
  payload: data
});

export const setError = error => ({
  type: types.SET_ERROR,
  payload: error
});