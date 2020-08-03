import React from 'react';

import { IconLink } from '../IconLink';

import './styles.scss';

const IconLinkList = ({ data }) => {

  return (
    <div className="icon-link-list">
      {data.map((iconLinkProps) => {
        return (
          <div className="icon-link-container">
            <IconLink {...iconLinkProps} />
          </div>
        );
      })}
    </div>
  );
};

export default IconLinkList;