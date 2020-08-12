import React from 'react';

import { ProductCard } from '../ProductCard';

import './styles.scss';

const ProductCardList = ({ data }) => {
  return (
    <div className="product-card-list">
      {data.map((productCardProps, index) => {
        return (
          <div className="list-item" key={`product-card-${productCardProps.productId}`}>
            <ProductCard {...productCardProps} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductCardList;