import React from 'react';
import { Link } from 'react-router-dom';

import { IconLinkList } from './IconLinkList'

import './styles.scss';

/*
    TODO: verify links when creating other pages
*/
const iconLinkData = [
    {
        icon: 'fas fa-store-alt',
        text: 'Shop',
        path: '/shop'
    },
    {
        icon: 'fas fa-shopping-cart',
        text: 'Cart',
        path: '/cart'
    }
];

const NavBar = () => {
    return (
        <div className="app-navbar">
            <div className="container">
                <div className="first-row">
                    <Link to="/">
                        <img
                            src={process.env.PUBLIC_URL + "/logo.jpg"}
                            alt=""
                            height={80}
                        />
                    </Link>
                    <IconLinkList data={iconLinkData} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;