import React from 'react';

import './styles.scss';

const ImageHeader = ({ text, imageUrl, icon }) => {
  return (
    <div className="image-header">
      <div className="text-container fw-1000 fs-2rem">
        <span>{text}</span>
        <i className={icon} />
      </div>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default ImageHeader;