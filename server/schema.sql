DROP DATABASE Reviews;

CREATE DATABASE IF NOT EXISTS Reviews;

USE Reviews;

CREATE TABLE listings (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  host VARCHAR(40) NOT NULL,
  img VARCHAR(250) NOT NULL
);

CREATE TABLE reviews (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  traveler varchar(40) NOT NULL,
  profilePic varchar(250),
  date varchar(40) NOT NULL,
  body text,
  accuracy int,
  communication int,
  cleanliness int,
  location int,
  checkIn int,
  value int,
  overall int,
  listingsId int,
  FOREIGN KEY (listingsId)
    REFERENCES listings(id)
    ON DELETE CASCADE
);

INSERT INTO listings (id, host, img) VALUES
  (1, 'Ryan Zhong', 'https://placekitten.com/640/360'),
  (2, 'Steven Yoh', 'https://placekitten.com/640/360');

INSERT INTO reviews (id, traveler, profilePic, date, body, accuracy, communication, cleanliness, location, checkIn, value, overall, listingsId) VALUES
  (1, 'Justin Chan', 'https://placebear.com/640/360', 'August 2019', 'This was a good stay.', 4, 4, 5, 5, 4, 4, 4, 1),
  (2, 'Daniel Feng', 'https://placebear.com/640/360', 'July 2019', 'This was a bad stay.', 1, 2, 1, 4, 2, 2, 2, 2);