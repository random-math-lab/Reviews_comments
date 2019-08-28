import React from 'react';

const ReviewsListEntry = (props) => {

  // console.log(props)
  return (
    <div className="reviewListEntry">
      <div className="traveler">
        <div className="travelerPic">
          <a href="">
            <img id="travelerPic" src={props.review.profilePic} />
          </a>
        </div>

        <div className="travelerInfo">
          <div id="travelerName"> {props.review.traveler_firstName} </div>
          <div> {props.review.date} </div>
        </div>
      </div>

      <div className="reviewBody">
        <div id="reviewBody">
          {props.review.body}
        </div>
      </div>

      <div className="divider">
        <div>
          --------------------------------------------
        </div>

      </div>
    </div>

  )
}

export default ReviewsListEntry;