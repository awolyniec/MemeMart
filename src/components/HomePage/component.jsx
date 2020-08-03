import React from 'react';

import './styles.scss';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="container-fluid">
                <img
                    className="page-preview-image img-fluid"
                    src={process.env.PUBLIC_URL + "/images/mememart.jpg"}
                    alt=""
                />
            </div>
        </div>
    );
};

export default HomePage;