import { createSelector } from 'reselect';

const selectReviews = state => state.reviews;

export const selectReviewsByProductId = createSelector(
  [selectReviews],
  shop => shop.reviewsByProductId
);
