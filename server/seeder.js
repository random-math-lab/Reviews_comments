const faker = require('faker')
const db = require('./db.js')

//function to generate random star ratings 1-5
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

let listings = [];
//  listings seed
for (let listingCounter = 100; listingCounter > 0; listingCounter--) {
  let listing = {
    host_firstName : faker.name.firstName(),
    host_lastName : faker.name.lastName(),
    img : faker.image.cats()
  }
  listings.push(listing);
};
// db.query('TRUNCATE TABLE responses')
// db.query('TRUNCATE TABLE reviews')
// db.query('TRUNCATE TABLE listings')
// console.log(listings);
// console.log(listings.length);
for (let i = 0; i < listings.length; i ++) {
  // console.log(i);
  const queryAddListings = 'INSERT INTO listings (host_firstName, host_lastName, img) VALUES (?, ?, ?)'
  db.query(queryAddListings, [listings[i].host_firstName, listings[i].host_lastName, listings[i].img], (_, res) => {
    // console.log(res);
  })
}

let reviews = [];
//  reviews seed
for (let reviewsCounter = 2500; reviewsCounter > 0; reviewsCounter --) {
  let review = {
    traveler_firstName : faker.name.firstName(),
    traveler_lastName : faker.name.lastName(),
    profilePic : faker.image.nightlife(),
    date : faker.date.month() + ' ' + getRandomIntInclusive(2018, 2019),
    body : faker.lorem.text(),
    ratings_accuracy : getRandomIntInclusive(1, 5),
    ratings_communication : getRandomIntInclusive(1, 5),
    ratings_cleanliness : getRandomIntInclusive(1, 5),
    ratings_location : getRandomIntInclusive(1, 5),
    ratings_checkIn : getRandomIntInclusive(1, 5),
    ratings_value : getRandomIntInclusive(1, 5),
    ratings_overall : getRandomIntInclusive(1, 5),
    listingsId : getRandomIntInclusive(1, 100)
  }
  reviews.push(review);
};
// console.log(reviews);
// console.log(reviews.length);
for (let i = 0; i < reviews.length; i ++) {
  // console.log(i);
  const queryAddReviews = 'INSERT INTO reviews (traveler_firstName, traveler_lastName, profilePic, date, body, ratings_accuracy, ratings_communication, ratings_cleanliness, ratings_location, ratings_checkIn, ratings_value, ratings_overall, listingsId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  db.query(queryAddReviews, [
    reviews[i].traveler_firstName,
    reviews[i].traveler_lastName,
    reviews[i].profilePic,
    reviews[i].date,
    reviews[i].body,
    reviews[i].ratings_accuracy,
    reviews[i].ratings_communication,
    reviews[i].ratings_cleanliness,
    reviews[i].ratings_location,
    reviews[i].ratings_checkIn,
    reviews[i].ratings_value,
    reviews[i].ratings_overall,
    reviews[i].listingsId
  ])
}

let responses = [];
//  responses seed
for (let responsesCounter = 2500; responsesCounter > 0; responsesCounter--) {
  let response = {
    response : faker.lorem.text(),
    response_date : faker.date.month() + ' ' + getRandomIntInclusive(2018, 2019),
    reviewId : responsesCounter
  }
  responses.push(response);
};
// console.log(responses);
// console.log(responses.length);
for (let i = 0; i < responses.length; i ++) {
  console.log(i);
  const queryAddResponses = 'INSERT INTO responses (response, response_date, reviewId) VALUES (?, ?, ?)'
  db.query(queryAddResponses, [
    responses[i].response,
    responses[i].response_date,
    responses[i].reviewId
  ])
  // (err, res) => {
  //   console.log('reached')
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     // res.send(200);
  //     console.log(res);
  //   }
  // })
  // console.log(responses)
}

// for (let i = 0; i < listings.length; i ++) {
//   // console.log(i);
//   const queryAddListings = 'INSERT INTO listings (host_firstName, host_lastName, img) VALUES (?, ?, ?)'
//   db.query(queryAddListings, [listings[i].host_firstName, listings[i].host_lastName, listings[i].img])
// }