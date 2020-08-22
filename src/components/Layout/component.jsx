import React from 'react';

import { NavBar } from '../NavBar';

import './styles.scss';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <NavBar />
            <div className="page-container">
                {children}
            </div>
        </div>
    );
};

export default Layout;