import React from 'react';
import { Link } from 'react-router-dom';

import { displayPrice } from '../../utils';
import { ReviewSummary } from './ReviewSummary';

import './styles.scss';

const ProductCard = ({
  productId,
  imageUrl,
  productUrl,
  name,
  price,
  rarity,
  stars,
  nReviews,
  isBestseller
}) => {

  return (
    <div className="product-card">
      <div className="image-container">
        <Link to={productUrl}>
          <img
            src={imageUrl}
            alt=""
          />
        </Link>
        {isBestseller && (
          <div className="badges">
            <div className="badge bestseller-badge">
                <span>
                  BESTSELLER
                </span>
            </div>
          </div>
        )}
      </div>
      <div className="product-name text-bold">
        <Link to={productUrl}>
          <span>{name}</span>
        </Link>
      </div>
      <div className="bottom-content">
        <span>
          {rarity}
        </span>
        {nReviews ? (
          <ReviewSummary
            stars={stars}
            nReviews={nReviews}
          />
        ) : (
          <div className="review-summary-placeholder" />
        )}
        <span className="text-bold">
          {displayPrice(price)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;