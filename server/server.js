const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const db = require('./db.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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