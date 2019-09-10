import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

const ReviewsList = (props) => {
  return (
    <div>
      {props.reviewsResponses.map((review, i) => <ReviewsListEntry listingsInfo={props.listingsInfo} review={review} key={i} />)}
    </div>
  );
};

export default ReviewsList;