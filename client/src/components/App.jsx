import React from 'react';
import Ratings from 'react-ratings-declarative';

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
      overallRating: 0,
    };

    this.fetchListings = this.fetchListings.bind(this);
    this.fetchReviewsResponses = this.fetchReviewsResponses.bind(this);
    this.search = this.search.bind(this);
    this.handleOverallRating = this.handleOverallRating.bind(this);
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
        // console.log(that.state.listingsInfo)
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
        // console.log(that.state.reviewsResponses)
      });
  }

  componentDidMount() {
    this.fetchReviewsResponses();
    this.fetchListings();
    //can I set a delay timer on this to ensure apis are finished?
  }

  search(term) {
    console.log(term);
    //TODO
  }

  handleOverallRating(overall) {
    this.setState({
      overallRating: overall
    });
  }

  render() {
    if (!this.state.listingsInfo.length && !this.state.reviewsResponses.length) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <div className="header">

          <h2 id="head"> {this.state.reviewsResponses.length} Reviews </h2>
          <div className="overallStars">
            <span>
              <Ratings rating={this.state.overallRating} widgetRatedColors="007D8C" widgetDimensions="20px">
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
              </Ratings>
            </span>
          </div>
          <SearchBar search={this.search} />

        </div>
        <br/>

        <div id="h2divide"> -
        </div>

        <div>
          <RatingsList
            handleOverallRating={this.handleOverallRating}
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