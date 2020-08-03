import React from 'react';

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
                    <img
                        src={process.env.PUBLIC_URL + "/doge192.png"}
                        alt=""
                        height={64}
                    />
                    <IconLinkList data={iconLinkData} />
                </div>
            </div>
        </div>
    );
};

export default NavBar;