import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import SearchBar from './SearchBar.jsx';
import RatingsList from './RatingsList.jsx';


//for testing
import fetch from 'node-fetch';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      listingsId: 2,
      listingsInfo: [],
      reviewsResponses: [],
      searchedTerm: '',
    };

    this.fetchListings = this.fetchListings.bind(this);
    this.fetchReviewsResponses = this.fetchReviewsResponses.bind(this);
    this.search = this.search.bind(this);
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

  search(term) {
    console.log(term);
    //TODO
  }

  computeOverall() {
    const ratings = this.state.reviewsResponses;
    let overallArr = [];
    ratings.forEach((overallRating) => {
      if (overallRating.ratings_overall) {
        overallArr.push(overallRating.ratings_overall);
      }
    });
    let overallAvg = 0;
    for (let i = 0; i < overallArr.length; i++) {
      overallAvg += overallArr[i];
    }
    overallAvg = overallAvg / overallArr.length;
    return overallAvg;
  }

  render() {
    return (
      <div>
        <div className="header">

          <h2 id="head"> {this.state.reviewsResponses.length}Reviews </h2>
          <span id="overallStars">{this.computeOverall()} </span>
          <SearchBar search={this.search} />

        </div>

        <div id="h2divide"> --------------------------------------------
        </div>

        <div>
          <RatingsList
            reviewsResponses={this.state.reviewsResponses}
          />
        </div>

        <br/>
        <br/>
        <br/>

        <div>
          <ReviewsList
            listingsInfo={this.state.listingsInfo}
            reviewsResponses={this.state.reviewsResponses}
          />
        </div>

      </div>
    );
  }
}

export default App;