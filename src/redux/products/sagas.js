import { all, call, takeLatest, put } from 'redux-saga/effects';

import types from './types';
import { setFeaturedProducts, setProducts, setError } from './actions';
import { getFeaturedProducts, getProducts } from '../../services';

export function* fetchFeaturedProductsAsync() {
  try {
    const data = yield getFeaturedProducts();
    yield put(setFeaturedProducts(data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* onFetchFeaturedProducts() {
  yield takeLatest(types.FETCH_FEATURED_PRODUCTS, fetchFeaturedProductsAsync);
}

export function* fetchProductsAsync() {
  try {
    const data = yield getProducts();
    yield put(setProducts(data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* onFetchProducts() {
  yield takeLatest(types.FETCH_PRODUCTS, fetchProductsAsync);
}

export function* productSagas() {
  yield all([
    call(onFetchFeaturedProducts),
    call(onFetchProducts)
  ]);
}