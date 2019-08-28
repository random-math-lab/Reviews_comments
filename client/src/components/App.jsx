import React from 'react';
import ReviewsList from './ReviewsList.jsx';

//for testing
import fetch from 'node-fetch';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      listingsId: 2,
      listingsInfo: [],
      reviewsResponses: [],
    };

    this.fetchListings = this.fetchListings.bind(this);
    this.fetchReviewsResponses = this.fetchReviewsResponses.bind(this);
  }

  fetchListings() {
    const that = this;
    fetch(`/api/listings?listingsId=${that.state.listingsId}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // console.log(data);
        that.setState({listingsInfo: data});
      });
  }

  fetchReviewsResponses() {
    const that = this;
    fetch(`/api/reviewsResponses?listingsId=${that.state.listingsId}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // console.log(data);
        that.setState({reviewsResponses: data});
      });
  }

  componentDidMount() {
    this.fetchListings();
    this.fetchReviewsResponses();
  }

  render() {
    return (
      <div>
        <h2>Reviews!! </h2>
        <ReviewsList
        listingsInfo={this.state.listingsInfo}
        reviewsResponses={this.state.reviewsResponses}
        />


      </div>
    );
  }
}

export default App;