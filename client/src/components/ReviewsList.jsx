import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx'

const ReviewsList = (props) => {
  // console.log(props)
  return (
    <div className="reviewsList">
      {props.reviewsResponses.map((review, i) => <ReviewsListEntry review={review} key={i} />)}

    </div>


  )
}

export default ReviewsList;