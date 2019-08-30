import React from 'react';
import Ratings from 'react-ratings-declarative';

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
      listingsId: 44,
      listingsInfo: [],
      reviewsResponses: [],
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


  handleOverallRating(overall) {
    this.setState({
      overallRating: overall
    });
  }

  handleSearch(term) {
    console.log(term);
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
      return this.state.reviewsResponses.filter(review =>
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
          <h2 id="head"> {this.state.reviewsResponses.length} Reviews </h2>
          <div className="overallStars">
            <span>
              <Ratings rating={this.state.overallRating} widgetRatedColors="007D8C" widgetDimensions="19px">
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

      </div>
    );
  }
}

export default App;