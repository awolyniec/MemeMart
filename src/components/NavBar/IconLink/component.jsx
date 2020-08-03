import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './styles.scss';

/*
  TODO: Have a yellow, Doge-like highlight color
*/

const IconLink = ({ icon, text, path }) => {
  return (
    <div className="icon-link">
      <Link to={path}>
        <div className="displayed-content">
          <i className={classnames('icon', icon)} />
          <span>{text}</span>
        </div>
      </Link>
    </div>
  );
};

export default IconLink;