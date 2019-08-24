const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const db = require('./db.js')


app.use(express.static(__dirname + '/../client/dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get('/api/reviews', (req, res) => {
  const query = 'SELECT * FROM listings INNER JOIN reviews ON listings.id = reviews.listingsId INNER JOIN responses ON reviews.id = responses.reviewId';
  db.query(query, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.send(data);
    }
  })
})

app.listen(PORT, () => console.log(`OH YA on port ${PORT}!`))