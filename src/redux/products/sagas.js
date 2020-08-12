import { all, call, takeLatest, put } from 'redux-saga/effects';

import types from './types';
import { setFeaturedProducts, setError } from './actions';
import { getFeaturedProducts } from '../../services';

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

export function* productSagas() {
  yield all([
    call(onFetchFeaturedProducts)
  ]);
}