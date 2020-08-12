import React from 'react';
import classnames from 'classnames';

import './styles.scss';

const ReviewStars = ({ stars }) => {
  const wholeStars = Math.floor(stars);
  const hasPartialStar = stars !== wholeStars;
  const wholeOrPartialStars = wholeStars + hasPartialStar;

  const starElements = [];
  for (let i = 0; i < wholeOrPartialStars; i++) {
    starElements.push(
      <div key={`star-${i}`} className={classnames("star", {
        partial: (i === wholeOrPartialStars - 1) && hasPartialStar
      })}>
        <i className="fas fa-pepper-hot" />
      </div>
    )
  }

  return (
    <div className="review-stars">
      {starElements}
    </div>
  );
};

export default ReviewStars;