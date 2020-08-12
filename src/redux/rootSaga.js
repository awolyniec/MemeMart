import { all, call } from 'redux-saga/effects';

import { productSagas } from './products/sagas';
import { reviewSagas } from './reviews/sagas';

export default function* rootSaga() {
  yield all([
    call(productSagas),
    call(reviewSagas)
  ]);
}