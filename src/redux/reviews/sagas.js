import { all, call, takeLatest, put } from 'redux-saga/effects';

import types from './types';
import { setReviewsByProductId, setError } from './actions';
import { bulkReviewsByProductId } from '../../services';

export function* fetchReviewsByProductIdAsync({ payload: productIds }) {
  try {
    const data = yield bulkReviewsByProductId(productIds);
    yield put(setReviewsByProductId(data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* onFetchReviewsByProductId() {
  yield takeLatest(types.FETCH_FEATURED_PRODUCTS, fetchReviewsByProductIdAsync);
}

export function* reviewSagas() {
  yield all([
    call(onFetchReviewsByProductId)
  ]);
}