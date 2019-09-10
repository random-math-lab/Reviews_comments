import React from 'react';
import Ratings from 'react-ratings-declarative';
import chunk from 'lodash';

import ReviewsList from './ReviewsList.jsx';
import SearchBar from './SearchBar.jsx';
import RatingsList from './RatingsList.jsx';
import NoResults from './NoResults.jsx';
import ShowResults from './ShowResults.jsx';
import PageList from './PageList.jsx';

//for testing
import fetch from 'node-fetch';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      listingsId: this.getRandomIntInclusive(1, 100),
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
    this.goToPage = this.goToPage.bind(this);
    this.getRandomIntInclusive = this.getRandomIntInclusive.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  fetchListings() {
    const that = this;
    fetch(`http://ec2-54-153-36-39.us-west-1.compute.amazonaws.com:3306/api/listings?listingsId=${that.state.listingsId}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data)
        that.setState({ listingsInfo: data });
      });
  }

  fetchReviewsResponses() {
    const that = this;
    fetch(`http://ec2-54-153-36-39.us-west-1.compute.amazonaws.com:3306/api/reviewsResponses?listingsId=${that.state.listingsId}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        function sortFunction(a, b) {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateA < dateB ? 1 : -1;
        }
        const chronilogicalReviews = data.sort(sortFunction);
        // that.setState({ reviewsInfo: chronilogicalReviews });
        const carouseledReviews = _.chunk(chronilogicalReviews, 7);
        // that.setState({ carouseledReviewsInfo: carouseledReviews });
        that.setState({
          reviewsResponses: carouseledReviews[0],
          carouseledReviewsInfo: carouseledReviews,
          reviewsInfo: chronilogicalReviews
        });
      });
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
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

  goToPage(pageNum) {
    this.setState({
      page: pageNum
    });
    this.setState({
      reviewsResponses: this.state.carouseledReviewsInfo[pageNum - 1]
    });
  }

  handleScroll() {
    window.scroll({
      top: 600,
      behavior: 'smooth'
    });
  }

  render() {
    if (!this.state.listingsInfo.length && !this.state.reviewsResponses.length) {
      return <div>Vetting reviews...</div>;
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
        <div className="reviewsList">
          {limitedArray.length ? <ReviewsList
            listingsInfo={this.state.listingsInfo}
            reviewsResponses={limitedArray}
          /> : null}
        </div>
        <div id="pageList">
          {this.state.searchedTerm ? null : <PageList handleScroll={this.handleScroll} currentPage={this.state.page} goToPage={this.goToPage}carouseledReviewsInfo={this.state.carouseledReviewsInfo}/>}
        </div>
      </div>
    );
  }
}

export default App;