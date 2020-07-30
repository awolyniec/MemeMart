import React from 'react';

const NavBar = () => {
    
    return (
        <div className="app-navbar">
            <div className="navbar">
                <img
                    className="navbar-brand"
                    src={process.env.PUBLIC_URL + "/doge192.png"}
                    alt="logo"
                    height={64}
                />
                <ul className="navbar-nav">
                    <li className="nav-item">
                        Shop
                    </li>
                    <li className="nav-item">
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;