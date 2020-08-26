import merchandise from '../data/merchandise.json';
import { pathToPublicFile } from '../utils';

export const getFeaturedProducts = async () => {
  const featuredMemes = merchandise.memes
    .slice(0, 4)
    .map(({ imageUrl, ...rest }) => ({
      imageUrl: pathToPublicFile(imageUrl),
      ...rest
    }));

  return featuredMemes;
};

export const getProducts = async () => {
  return merchandise.memes
    .map(({ imageUrl, ...rest }) => ({
      imageUrl: pathToPublicFile(imageUrl),
      ...rest
    }));
};

export const bulkReviewsByProductId = async (productIds) => {
  const productIdsMap = {};
  for (let productId of productIds) {
    productIdsMap[productId] = true;
  }
  const reviewsForProducts = merchandise.reviews.filter(({ productId }) => productIdsMap[productId]);
  return reviewsForProducts;
};
