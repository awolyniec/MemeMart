import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFeaturedProducts } from '../../redux/products/actions';
import { selectFeaturedProducts } from '../../redux/products/selectors';
import { fetchReviewsByProductId } from '../../redux/reviews/actions';
import { selectReviewsByProductId } from '../../redux/reviews/selectors';
import { pathToPublicFile } from '../../utils';
import { ProductCardList } from '../ProductCardList';
import { getProductCardProps } from '../ProductCard';

import './styles.scss';

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

    const featuredProductsData = featuredProducts.map(product => getProductCardProps(product, reviewsByProductId));

    return (
        <div className="home-page">
            <div className="image-container">
                <img
                    className="page-preview-image img-fluid"
                    src={pathToPublicFile("/images/mememart.jpg")}
                    alt=""
                />
            </div>
            <div className="header-container">
                <h1 className="product-cards-header">FEATURED PRODUCTS</h1>
            </div>
            <div className="product-card-list-container">
                <ProductCardList data={featuredProductsData} />
            </div>
        </div>
    );
};

export default HomePage;