import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../redux/products/actions';
import { selectProducts } from '../../redux/products/selectors';
import { fetchReviewsByProductId } from '../../redux/reviews/actions';
import { selectReviewsByProductId } from '../../redux/reviews/selectors';
import { pathToPublicFile } from '../../utils';
import { ImageHeader } from './ImageHeader';
import { ProductCardList } from '../ProductCardList';
import { getProductCardProps } from '../ProductCard';

import './styles.scss';

const ShopPage = () => {
  const dispatch = useDispatch();
  const featuredProducts = useSelector(selectProducts);
  const reviewsByProductId = useSelector(selectReviewsByProductId);

  useEffect(() => {
      dispatch(fetchProducts());
  }, [dispatch]);

  // TODO: will the effect run every time the redux state is updated, because there is a new state object?
  useEffect(() => {
      const featuredProductIds = featuredProducts.map(product => product._id);
      dispatch(fetchReviewsByProductId(featuredProductIds));
  }, [dispatch, featuredProducts]);

  const featuredProductsData = featuredProducts.map(product => getProductCardProps(product, reviewsByProductId));

  return (
    <div className="shop-page">
      <div>
        <ImageHeader
          text="SHOP MEMES"
          imageUrl={pathToPublicFile('images/memes.jpg')}
          icon="fas fa-shopping-cart"
        />
      </div>
      <div className="header-container">
        <h1 className="product-cards-header">ALL MEMES</h1>
      </div>
      <div className="product-card-list-container">
        <ProductCardList data={featuredProductsData} />
      </div>
    </div>
  );
};

export default ShopPage;