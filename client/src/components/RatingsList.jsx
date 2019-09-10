import React from 'react';
import Ratings from 'react-ratings-declarative';

class RatingsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // ratings: [],
      accuracy: 0,
      communication: 0,
      cleanliness: 0,
      location: 0,
      checkIn: 0,
      value: 0,
      isLoading: true,
    };

    this.computeAccuracy = this.computeAccuracy.bind(this);
    this.computeCommunication = this.computeCommunication.bind(this);
    this.computeCleanliness = this.computeCleanliness.bind(this);
    this.computeLocation = this.computeLocation.bind(this);
    this.computeCheckIn = this.computeCheckIn.bind(this);
    this.computeValue = this.computeValue.bind(this);
    this.computeOverall = this.computeOverall.bind(this);

  }

  // componentDidMount() {
  //   console.log(this.props.reviewsResponses);
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.reviewsResponses !== this.props.reviewsResponses) {
      this.computeAccuracy();
      this.computeCommunication();
      this.computeCleanliness();
      this.computeLocation();
      this.computeCheckIn();
      this.computeValue();
      this.computeOverall();
    }
  }

  computeOverall() {
    const ratings = this.props.reviewsResponses;
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
    return this.props.handleOverallRating(overallAvg);
  }

  computeAccuracy() {
    const ratings = this.props.reviewsResponses;
    let accArr = [];
    ratings.forEach((accRating) => {
      if (accRating.ratings_accuracy) {
        accArr.push(accRating.ratings_accuracy);
      }
    });
    let accAvg = 0;
    for (let i = 0; i < accArr.length; i++) {
      accAvg += accArr[i];
    }
    accAvg = accAvg / accArr.length;
    this.setState({
      accuracy: accAvg
    });
    return accAvg;
  }

  computeCommunication() {
    const ratings = this.props.reviewsResponses;
    let comArr = [];
    ratings.forEach((comRating) => {
      if (comRating.ratings_communication) {
        comArr.push(comRating.ratings_communication);
      }
    });
    let comAvg = 0;
    for (let i = 0; i < comArr.length; i++) {
      comAvg += comArr[i];
    }
    comAvg = comAvg / comArr.length;
    this.setState({
      communication: comAvg
    });
    return comAvg;
  }

  computeCleanliness() {
    const ratings = this.props.reviewsResponses;
    let cleanliArr = [];
    ratings.forEach((cleanliRating) => {
      if (cleanliRating.ratings_communication) {
        cleanliArr.push(cleanliRating.ratings_communication);
      }
    });
    let cleanliAvg = 0;
    for (let i = 0; i < cleanliArr.length; i++) {
      cleanliAvg += cleanliArr[i];
    }
    cleanliAvg = cleanliAvg / cleanliArr.length;
    this.setState({
      cleanliness: cleanliAvg
    });
    return cleanliAvg;
  }

  computeLocation() {
    const ratings = this.props.reviewsResponses;
    let locArr = [];
    ratings.forEach((locRating) => {
      if (locRating.ratings_location) {
        locArr.push(locRating.ratings_location);
      }
    });
    let locAvg = 0;
    for (let i = 0; i < locArr.length; i++) {
      locAvg += locArr[i];
    }
    locAvg = locAvg / locArr.length;
    this.setState({
      location: locAvg
    });
    return locAvg;
  }

  computeCheckIn() {
    const ratings = this.props.reviewsResponses;
    let checkInArr = [];
    ratings.forEach((checkInRating) => {
      if (checkInRating.ratings_location) {
        checkInArr.push(checkInRating.ratings_location);
      }
    });
    let checkInAvg = 0;
    for (let i = 0; i < checkInArr.length; i++) {
      checkInAvg += checkInArr[i];
    }
    checkInAvg = checkInAvg / checkInArr.length;
    this.setState({
      checkIn: checkInAvg
    });
    return checkInAvg;
  }

  computeValue() {
    const ratings = this.props.reviewsResponses;
    let valueArr = [];
    ratings.forEach((valueRating) => {
      if (valueRating.ratings_value) {
        valueArr.push(valueRating.ratings_value);
      }
    });
    let valueAvg = 0;
    for (let i = 0; i < valueArr.length; i++) {
      valueAvg += valueArr[i];
    }
    valueAvg = valueAvg / valueArr.length;
    this.setState({
      value: valueAvg
    });
    return valueAvg;
  }

  render() {
    //this conditional logic is being skipped, pretty sure
    //
    let page;
    if (this.state.value === 0) {
      page = <div>serving up guest ratings...</div>
    } else {
      page = <div className="ratingsSection">
      <div className="ratings1">
        <div className="rating"> Accuracy
        </div>
        <div className="rating"> Communication
        </div>
        <div className="rating">  Cleanliness
        </div>
      </div>
      <div className="ratings3">
        <Ratings rating={this.state.accuracy} widgetRatedColors="007D8C" widgetDimensions="19px" widgetSpacings="1px">
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
        <Ratings rating={this.state.communication} widgetRatedColors="007D8C" widgetDimensions="19px" widgetSpacings="1px">
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
        <Ratings rating={this.state.cleanliness} widgetRatedColors="007D8C" widgetDimensions="19px" widgetSpacings="1px">
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
          <Ratings.Widget />
        </Ratings>
      </div>

      <div className="ratings2">
        <div className="rating"> Location
        </div>
        <div className="rating"> Check-in
        </div>
        <div className="rating"> Value
        </div>
      </div>

      <div className="ratings4">
        <div>
          <Ratings rating={this.state.location} widgetRatedColors="007D8C" widgetDimensions="19px" widgetSpacings="1px">
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>
        <div>
          <Ratings rating={this.state.checkIn} widgetRatedColors="007D8C" widgetDimensions="19px" widgetSpacings="1px">
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>
        <div>
          <Ratings rating={this.state.value} widgetRatedColors="007D8C" widgetDimensions="19px" widgetSpacings="1px">
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>
      </div>
    </div>
    }
    return (
      <div>
        {page}
      </div>
    );
  }
}

export default RatingsList;