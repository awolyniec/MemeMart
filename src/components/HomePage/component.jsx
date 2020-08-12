import * as _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFeaturedProducts } from '../../redux/products/actions';
import { selectFeaturedProducts } from '../../redux/products/selectors';
import { fetchReviewsByProductId } from '../../redux/reviews/actions';
import { selectReviewsByProductId } from '../../redux/reviews/selectors';
import { pathToPublicFile } from '../../utils';

import './styles.scss';
import { ProductCardList } from '../ProductCardList';

const HomePage = () => {
    const dispatch = useDispatch();
    const featuredProducts = useSelector(selectFeaturedProducts);
    const reviewsByProductId = useSelector(selectReviewsByProductId);

    useEffect(() => {
        dispatch(fetchFeaturedProducts());
    }, [dispatch]);

    // TODO: will the effect run every time the redux state is updated, because there is a new state object?
    useEffect(() => {
        const featuredProductIds = featuredProducts.map(product => product._id);
        dispatch(fetchReviewsByProductId(featuredProductIds));
    }, [dispatch, featuredProducts]);

    const featuredProductsData = featuredProducts.map(product => {
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
    });

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
                <div className="container">
                    <div className="header-container">
                        <h1>FEATURED PRODUCTS</h1>
                    </div>
                    <ProductCardList data={featuredProductsData} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;