import React from 'react';

import { ReviewStars } from '../../ReviewStars';

import './styles.scss';

const ReviewSummary = ({ stars, nReviews }) => {
  const nStarsRounded = Math.round(stars * 10) / 10;
  return (
    <div className="review-summary">
      <ReviewStars stars={stars} />
      <span>{nStarsRounded}/5</span>
      <span>({nReviews})</span>
    </div>
  );
};

export default ReviewSummary;