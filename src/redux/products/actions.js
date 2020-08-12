import types from './types';

export const fetchFeaturedProducts = () => ({
  type: types.FETCH_FEATURED_PRODUCTS
});

export const setFeaturedProducts = data => ({
  type: types.SET_FEATURED_PRODUCTS,
  payload: data
});

export const setError = error => ({
  type: types.SET_ERROR,
  payload: error
});