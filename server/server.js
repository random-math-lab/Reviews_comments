const express = require('express');
const app = express();
const PORT = 3306;
const bodyParser = require('body-parser');
const db = require('./db.js');
// const morgan = require('morgan');
const path = require('path');
var cors = require('cors');


app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// app.use(morgan('tiny'))
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
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