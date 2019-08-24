DROP DATABASE Reviews;

CREATE DATABASE IF NOT EXISTS Reviews;

USE Reviews;

CREATE TABLE listings (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  host_firstName VARCHAR(40) NOT NULL,
  host_lastName VARCHAR (40) NOT NULL,
  img VARCHAR(250) NOT NULL
);

CREATE TABLE reviews (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  traveler_firstName VARCHAR(40) NOT NULL,
  traveler_lastName VARCHAR(40) NOT NULL,
  profilePic VARCHAR(250),
  date VARCHAR(40) NOT NULL,
  body TEXT,
  ratings_accuracy INT,
  ratings_communication INT,
  ratings_cleanliness INT,
  ratings_location INT,
  ratings_checkIn INT,
  ratings_value INT,
  ratings_overall INT,
  listingsId INT,
  FOREIGN KEY (listingsId)
    REFERENCES listings(id)
    ON DELETE CASCADE
);

CREATE TABLE responses (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  response TEXT,
  response_date VARCHAR(25),
  reviewId INT,
  FOREIGN KEY (reviewId)
    REFERENCES reviews(id)
    ON DELETE CASCADE
);

-- INSERT INTO listings (id, host_firstName, host_lastName, img) VALUES
--   (1, 'Ryan', 'Zhong', 'https://placekitten.com/640/360'),
--   (2, 'Steven', 'Yoh', 'https://placekitten.com/640/360');

-- INSERT INTO reviews (id, traveler_firstName, traveler_lastName, profilePic, date, body, ratings_accuracy, ratings_communication, ratings_cleanliness, ratings_location, ratings_checkIn, ratings_value, ratings_overall, listingsId) VALUES
--   (1, 'Justin', 'Chan', 'https://placebear.com/640/360', 'August 2019', 'This was a good stay.', 4, 4, 5, 5, 4, 4, 4, 1),
--   (2, 'Daniel', 'Feng', 'https://placebear.com/640/360', 'July 2019', 'This was a bad stay.', 1, 2, 1, 4, 2, 2, 2, 2);

-- INSERT INTO responses (id, response, response_date, reviewId) VALUES
--   (1, 'My place is hella good.', 'August 2019', 1),
--   (2, 'MY place is hella better.', 'July 2019', 2);