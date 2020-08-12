import { all, call, takeLatest, put } from 'redux-saga/effects';

import types from './types';
import { setReviewsByProductId, setError } from './actions';
import { bulkReviewsByProductId } from '../../services';

export function* fetchReviewsByProductIdAsync({ payload: productIds }) {
  try {
    const reviews = yield bulkReviewsByProductId(productIds);
    const reviewsByProductId = {};
    for (let review of reviews) {
      const { productId } = review;
      reviewsByProductId[productId] = reviewsByProductId[productId] || [];
      reviewsByProductId[productId].push(review);
    }
    yield put(setReviewsByProductId(reviewsByProductId));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* onFetchReviewsByProductId() {
  yield takeLatest(types.FETCH_REVIEWS_BY_PRODUCT_ID, fetchReviewsByProductIdAsync);
}

export function* reviewSagas() {
  yield all([
    call(onFetchReviewsByProductId)
  ]);
}