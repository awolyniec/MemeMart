import React from 'react';
import { Link } from 'react-router-dom';

import { displayPrice } from '../../utils';
import { ReviewSummary } from './ReviewSummary';

import './styles.scss';

const ProductCard = ({
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
      <div className="product-card-body">
        <div className="name-and-rarity">
          <Link to={productUrl}>
            <b>{name}</b>
          </Link>
          <span>
            {rarity}
          </span>
        </div>
        <div className="bottom-content">
          <ReviewSummary
            stars={stars}
            nReviews={nReviews}
          />
          <b>
            {displayPrice(price)}
          </b>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;