import React from 'react';
import Responses from './responses.jsx';

class ReviewsListEntry extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      isHidden: true
    };

    this.toggleisHidden = this.toggleisHidden.bind(this);
  }

  toggleisHidden () {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render () {
    // console.log(this.props)
    let limitedReview = '';
    // console.log(limitedReview)
    if (this.props.review.body.length > 250 && this.state.isHidden === true) {
      limitedReview = this.props.review.body.substring(0, 250);
    } else {
      limitedReview = this.props.review.body;
    }

    return (
      <div className="reviewListEntry">
        <div className="traveler">
          <div className="travelerPic">
            <a href="">
              <img id="travelerPic" src={this.props.review.profilePic} />
            </a>
          </div>

          <div className="travelerInfo">
            <div id="travelerName"> {this.props.review.traveler_firstName} </div>
            <div> {this.props.review.date} </div>
          </div>
        </div>

        <div className="reviewBody">
          <div id="reviewBody">
            {limitedReview}
            {this.state.isHidden && this.props.review.body.length > 250 ? <span id="readMore" onClick={this.toggleisHidden}>...Read More</span> : null}
          </div>
        </div>


        <div>
          {this.props.review.listingsId % 2 !== 0 ? null : <Responses
          listingsInfo={this.props.listingsInfo}
          response={this.props.review.response}
          response_date={this.props.review.response_date}/>}

        </div>

        <div className="divider">
          <div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsListEntry;