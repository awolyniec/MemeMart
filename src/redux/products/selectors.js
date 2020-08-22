import { createSelector } from 'reselect';

const selectProductsState = state => state.products;

export const selectFeaturedProducts = createSelector(
  [selectProductsState],
  shop => shop.featuredProducts
);

export const selectProducts = createSelector(
  [selectProductsState],
  shop => shop.products
);