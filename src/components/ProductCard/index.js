import _ from 'lodash';

import ProductCard from './component';

const getProductCardProps = (product, reviewsByProductId = {}) => {
  const {
      _id,
      imageUrl,
      name,
      price,
      rarity,
      isBestseller
  } = product;
  const productData = Object.assign({}, {
      productId: _id,
      imageUrl,
      name,
      price,
      rarity,
      isBestseller,
      productUrl: `/products/${_id}`
  });
  const reviewsForProduct = reviewsByProductId[product._id];
  if (!reviewsForProduct) {
      return productData;
  }
  const stars = _.sumBy(reviewsForProduct, ({ stars }) => stars);
  return Object.assign(productData, { stars, nReviews: reviewsForProduct.length });
};

export {
  ProductCard,
  getProductCardProps
};