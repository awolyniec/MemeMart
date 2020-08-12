import merchandise from '../data/merchandise.json';

export const getFeaturedProducts = async () => {
  const featuredMemes = merchandise.memes
    .slice(0, 5)
    .map(({ imageUrl, ...rest }) => ({
      imageUrl: process.env.PUBLIC_URL + '/' + imageUrl,
      ...rest
    }));

  return featuredMemes;
};

export const bulkReviewsByProductId = async (productIds) => {
  const productIdsMap = {};
  for (let productId of productIds) {
    productIdsMap[productId] = true;
  }
  const reviewsForProducts = merchandise.reviews.filter(({ productId }) => productIdsMap[productId]);
  return reviewsForProducts;
};
