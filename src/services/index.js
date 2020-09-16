import axios from 'axios';

import { routes } from '@awolyniec/mm-util';
import { url, path } from '@awolyniec/mm-util/utils';

import { pathToPublicFile } from '../utils';

export const getFeaturedProducts = async () => {
  const { data: dbProducts } = await axios.get(
    url('http', 'mmQuery', routes.mmQuery.products.featured)
  );
  return dbProducts
    .slice(0, 4)
    .map(({ imageUrl, ...rest }) => ({
      imageUrl: pathToPublicFile(imageUrl),
      ...rest
    }));
};

export const getProducts = async () => {
  const { data: dbProducts } = await axios.get(
    url('http', 'mmQuery', routes.mmQuery.products.search)
  );

  return dbProducts
    .map(({ imageUrl, ...rest }) => ({
      imageUrl: pathToPublicFile(imageUrl),
      ...rest
    }));
};

export const bulkReviewsByProductId = async (productIds) => {
  const { data: reviews } = await axios.get(
    url('http', 'mmQuery', path(routes.mmQuery.reviews.bulkByProductId, { productIds }))
  );
  return reviews;
};
