import React from 'react';
import Ratings from 'react-ratings-declarative';
import chunk from 'lodash';

import ReviewsList from './ReviewsList.jsx';
import SearchBar from './SearchBar.jsx';
import RatingsList from './RatingsList.jsx';
import NoResults from './NoResults.jsx';
import ShowResults from './ShowResults.jsx';

//for testing
import fetch from 'node-fetch';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      listingsId: 42,
      listingsInfo: [],
      reviewsInfo: [],
      carouseledReviewsInfo: [],
      reviewsResponses: [],
      page: 1,
      searchedTerm: '',
      value: '',
      overallRating: 0,
    };

    this.fetchListings = this.fetchListings.bind(this);
    this.fetchReviewsResponses = this.fetchReviewsResponses.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOverallRating = this.handleOverallRating.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.inputSearchedTerm = this.inputSearchedTerm.bind(this);
  }

  fetchListings() {
    const that = this;
    fetch(`/api/listings?listingsId=${that.state.listingsId}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // console.log(data);
        that.setState({ listingsInfo: data });
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
        function sortFunction(a, b) {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateA < dateB ? 1 : -1;
        }
        const chronilogicalReviews = data.sort(sortFunction);
        that.setState({ reviewsInfo: chronilogicalReviews });
        console.log(that.state.reviewsInfo);

        const carouseledReviews = _.chunk(chronilogicalReviews, 7);
        that.setState({ carouseledReviewsInfo: carouseledReviews });
        console.log(that.state.carouseledReviewsInfo);
        that.setState({ reviewsResponses: carouseledReviews[2] });
        console.log(that.state.reviewsResponses);
        // console.log(that.state.reviewsResponses)
      });
  }

  componentDidMount() {
    this.fetchReviewsResponses();
    this.fetchListings();
    //can I set a delay timer on this to ensure apis are finished?
  }


  handleOverallRating(overall) {
    this.setState({
      overallRating: overall
    });
  }

  handleSearch(term) {
    // console.log(term);
    this.setState({
      value: term
    });
  }

  inputSearchedTerm() {
    this.setState({
      searchedTerm: this.state.value
    });
  }

  filterReviewsBySearchedTerm() {
    if (this.state.searchedTerm) {
      return this.state.reviewsInfo.filter(review =>
        review.body.toLowerCase().includes(this.state.searchedTerm.toLowerCase()));
    } else {
      return this.state.reviewsResponses;
    }
  }

  clearSearch() {
    this.setState({ searchedTerm: '', value: '', });
  }

  render() {
    if (!this.state.listingsInfo.length && !this.state.reviewsResponses.length) {
      return <div>Loading</div>;
    }
    const reviews = this.filterReviewsBySearchedTerm();
    let limitedArray = reviews;


    return (
      <div>
        <div className="header">
          <h2 id="head"> {this.state.reviewsInfo.length} Reviews </h2>
          <div className="overallStars">
            <span>
              <Ratings rating={this.state.overallRating} widgetRatedColors="007D8C" widgetDimensions="19px" widgetSpacings="1px">
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
              </Ratings>
            </span>
          </div>

          <div id="search">
            <SearchBar
              inputSearchedTerm={this.inputSearchedTerm}
              value={this.state.value}
              clearSearch={this.clearSearch}
              changeSearch={this.changeSearch}
              handleSearch={this.handleSearch} />
          </div>
        </div>

        <br/>
        <div id="h2divide">
        </div>

        <div>
          {!this.state.searchedTerm && <RatingsList
            handleOverallRating={this.handleOverallRating}
            reviewsResponses={this.state.reviewsResponses}/>}
        </div>

        <div>
          {this.state.searchedTerm && !limitedArray.length ? <NoResults clearSearch={this.clearSearch} searchedTerm={this.state.searchedTerm}/> : null}
          {this.state.searchedTerm && limitedArray.length ? <ShowResults limitedArray={limitedArray} clearSearch={this.clearSearch} searchedTerm={this.state.searchedTerm}/> : null}
        </div>

        {/* <div id="ratingsDivide">
        </div> */}
        {/* <br/> */}

        <div className="reviewsList">
          {limitedArray.length ? <ReviewsList
            listingsInfo={this.state.listingsInfo}
            reviewsResponses={limitedArray}
          /> : null}
        </div>
        <div>
          {}

        </div>
      </div>
    );
  }
}

export default App;