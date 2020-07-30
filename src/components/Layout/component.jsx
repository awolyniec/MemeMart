import React from 'react';

import { NavBar } from '../NavBar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <NavBar />
            {children}
        </div>
    );
};

export default Layout;