import React from 'react';

class RatingsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.computeAccuracy = this.computeAccuracy.bind(this);
    this.computeCommunication = this.computeCommunication.bind(this);
    this.computeCleanliness = this.computeCleanliness.bind(this);
    this.computeLocation = this.computeLocation.bind(this);
    this.computeCheckIn = this.computeCheckIn.bind(this);
    this.computeValue = this.computeValue.bind(this);

  }

  computeAccuracy() {
    const ratings = this.props.reviewsResponses;
    let accArr = [];
    // console.log(ratings)
    ratings.forEach((accRating) => {
      if (accRating.ratings_accuracy) {
        accArr.push(accRating.ratings_accuracy);
      }
    });
    let accAvg = 0;
    // console.log(accArr);
    for (let i = 1; i < accArr.length; i++) {
      // console.log(accArr[i])
      accAvg += accArr[i];
      // console.log(accAvg);
    }
    accAvg = accAvg / accArr.length;
    // console.log(accAvg)
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
    for (let i = 1; i < comArr.length; i++) {
      comAvg += comArr[i];
    }
    comAvg = comAvg / comArr.length;
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
    for (let i = 1; i < cleanliArr.length; i++) {
      cleanliAvg += cleanliArr[i];
    }
    cleanliAvg = cleanliAvg / cleanliArr.length;
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
    for (let i = 1; i < locArr.length; i++) {
      locAvg += locArr[i];
    }
    locAvg = locAvg / locArr.length;
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
    for (let i = 1; i < checkInArr.length; i++) {
      checkInAvg += checkInArr[i];
    }
    checkInAvg = checkInAvg / checkInArr.length;
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
    for (let i = 1; i < valueArr.length; i++) {
      valueAvg += valueArr[i];
    }
    valueAvg = valueAvg / valueArr.length;
    return valueAvg;
  }

  render() {
    // console.log(this.props)
    return (
      <div className="ratingsSection">
        <div className="ratings1">
          <div> Accuracy {this.computeAccuracy()} </div>
          <div> Communication {this.computeCommunication()} </div>
          <div> Cleanliness {this.computeCleanliness()} </div>
        </div>

        <div className="ratings2">
          <div> Location {this.computeLocation()} </div>
          <div> Check-in {this.computeCheckIn()} </div>
          <div> Value {this.computeValue()} </div>

        </div>
      </div>
    );
  }
}


export default RatingsList;