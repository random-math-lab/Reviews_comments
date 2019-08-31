import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';

// an array of arrays
//TODO sort by most recent?
//do in app component?

// class ReviewsList extends React.Component {
//   constructor (props) {
//     super (props);

//     this.state = {
//       carousel: [],
//       page: 1,
//     }
//   }
//   render () {
//     console.log(this.props)
//     return (
//       <div>
//         {this.props.reviewsResponses.map((review, i) => <ReviewsListEntry review={review} key={i} />)}
//       </div>
//     )
//   }
// }

const ReviewsList = (props) => {
  return (
    <div>
      {props.reviewsResponses.map((review, i) => <ReviewsListEntry review={review} key={i} />)}
    </div>
  );
};

export default ReviewsList;