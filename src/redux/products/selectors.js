import { createSelector } from 'reselect';

const selectProducts = state => state.products;

export const selectFeaturedProducts = createSelector(
  [selectProducts],
  shop => shop.featuredProducts
);
