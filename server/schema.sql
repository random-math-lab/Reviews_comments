CREATE DATABASE IF NOT EXISTS Reviews;

USE Reviews;

CREATE TABLE reviews (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  listingId int NOT NULL,
  profilePic varchar(250),
  name varchar(40) NOT NULL,
  date varchar(40) NOT NULL,
  body text,
  accuracy int,
  communication int,
  cleanliness int,
  location int,
  checkIn int,
  value int
);


INSERT INTO reviews (id, listingId, profilePic, name, date, body, accuracy, communication, cleanliness, location, checkIn, value) VALUES
  (1, 1, 'http://placekitten.com/200/300','Justin Chan', 'August 2019', 'This place was a good stay.', 5, 4, 5, 5, 3, 4),
  (2, 1, 'http://placekitten.com/200/300','Ryan Zhong', 'July 2019', 'This place was a bad stay.', 1, 2, 3, 4, 3, 2);