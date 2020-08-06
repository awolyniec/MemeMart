import React from 'react';

import { pathToPublicFile } from '../../utils';

import './styles.scss';
import ProductCard from '../ProductCard/component';

const tallProductCardProps = {
    imageUrl: pathToPublicFile("/images/Merchandise/meme.jpeg"),
    productUrl: '/shop/exampleProductId1',
    name: 'Legendary Arrested for Everything',
    price: 199,
    rarity: 'Uncommon',
    stars: 5,
    nReviews: 112,
    isBestseller: true
};

const wideProductCardProps = {
    imageUrl: pathToPublicFile("/images/Merchandise/buff-doge-grandpa.jpg"),
    productUrl: '/shop/exampleProductId2',
    name: 'Buff Doge Grandpa',
    price: 299,
    rarity: 'Uncommon',
    stars: 4.547,
    nReviews: 23
};

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="container-fluid">
                <div className="image-container">
                    <img
                        className="page-preview-image img-fluid"
                        src={pathToPublicFile("/images/mememart.jpg")}
                        alt=""
                    />
                </div>
                <div style={{width: '314px'}}>
                    <ProductCard
                        {...wideProductCardProps}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;