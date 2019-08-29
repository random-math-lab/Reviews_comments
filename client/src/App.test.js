import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';

import App from './components/App.jsx';
import RatingsList from './components/RatingsList.jsx';
import ReviewsList from './components/ReviewsList.jsx';
import ReviewsListEntry from './components/ReviewsListEntry.jsx';
import SearchBar from './components/SearchBar.jsx';

// const fetch = require('node-fetch')

Enzyme.configure({ adapter: new Adapter() });

// Testing App.jsx
describe('<App /> rendering', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  // shallow tests are rendering with empty data states.
  it('should display loading if no data loaded', () => {
    let wrapper = shallow(<App />);
    let header = wrapper.text('div');
    expect(header).toEqual('Loading');
  });
});

// Testing RatingsList.jsx
describe('<RatingsList /> rendering', () => {
  const handleOverallRating = jest.fn();
  it('renders without crashing', () => {
    shallow(<RatingsList handleOverallRating={handleOverallRating} reviewsResponses={[]} />);
  });

  it('should find the ratingsSection div tag existence', () => {
    let wrapper = shallow(<RatingsList handleOverallRating={handleOverallRating}
      reviewsResponses={[]} />);
    let ratingsSection = wrapper.find('.ratingsSection');
    expect(ratingsSection).toHaveLength(1);
  });

  //

});

// Testing ReviewsList.jsx
describe('<ReviewsList /> rendering', () => {
  it('renders without crashing', () => {
    shallow(<ReviewsList
      listingsInfo={[]}
      reviewsResponses={[]} />);
  });

  //TODO - test props recevied and mapping props down?

});


// Testing ReviewsListEntry.jsx
describe('<ReviewsListEntry /> rendering', () => {
  it('renders without crashing', () => {
    shallow(<ReviewsListEntry review={[]} key={[]}/>);
  });

});


// Testing SearchBar.jsx
describe('<SearchBar /> rendering', () => {
  it('renders without crashing', () => {
    shallow(<SearchBar search={[]}/>);
  });
});


// Testing
