import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFeaturedProducts } from '../../redux/products/actions';
import { selectFeaturedProducts } from '../../redux/products/selectors';
import { pathToPublicFile } from '../../utils';

import './styles.scss';
import { ProductCardList } from '../ProductCardList';

const HomePage = () => {
    const dispatch = useDispatch();
    const featuredProducts = useSelector(selectFeaturedProducts);

    useEffect(() => {
        dispatch(fetchFeaturedProducts());
    }, [dispatch]);

    // TODO: get reviews
    // TODO: will the effect run every time the redux state is updated, because there is a new state object?

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
                    <ProductCardList data={featuredProducts} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;