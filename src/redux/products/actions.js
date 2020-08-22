import types from './types';

export const fetchFeaturedProducts = () => ({
  type: types.FETCH_FEATURED_PRODUCTS
});

export const setFeaturedProducts = data => ({
  type: types.SET_FEATURED_PRODUCTS,
  payload: data
});

export const fetchProducts = () => ({
  type: types.FETCH_PRODUCTS
});

export const setProducts = data => ({
  type: types.SET_PRODUCTS,
  payload: data
});

export const setError = error => ({
  type: types.SET_ERROR,
  payload: error
});