const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const db = require('./db.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/api/listings', (req, res) => {
  const queryListings = `SELECT * FROM listings WHERE id = ${req.query.listingsId}`;
  db.query(queryListings, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.get('/api/reviewsResponses', (req, res) => {
  // const query = 'SELECT * FROM listings INNER JOIN reviews ON listings.id = reviews.listingsId INNER JOIN responses ON reviews.id = responses.reviewId';
  // const query = 'SELECT * FROM listings INNER JOIN reviews ON listings.id = reviews.listingsId';
  const queryReviews = `SELECT * FROM reviews INNER JOIN responses ON reviews.id = responses.reviewId WHERE reviews.listingsId = ${req.query.listingsId}`;
  db.query(queryReviews, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.listen(PORT, () => console.log(`OH YA on port ${PORT}!`));