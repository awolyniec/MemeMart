import React from 'react';

import { pathToPublicFile } from '../../utils';
import { ImageHeader } from './ImageHeader';

import './styles.scss';

const ShopPage = () => {
  return (
    <div className="shop-page">
      <ImageHeader
        text="SHOP MEMES"
        imageUrl={pathToPublicFile('images/memes.jpg')}
        icon="fas fa-shopping-cart"
      />
    </div>
  );
};

export default ShopPage;