import React from 'react';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      listingsId : 1,
      listingsInfo : [],
      reviewsResponses: [],
    }

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
      console.log(data);
      that.setState({listingsInfo : data})
    });
  }

  fetchReviewsResponses() {
    const that = this;
    fetch(`/api/reviewsResponses?listingsId=${that.state.listingsId}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      that.setState({reviewsResponses : data})
    })
  }

  componentDidMount() {
    this.fetchListings();
    this.fetchReviewsResponses();
  }

  render() {
    return(
      <div>
        Reviews!
      </div>
    )
  }
}

export default App