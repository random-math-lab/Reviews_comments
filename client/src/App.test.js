import App from './components/App.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';

// const fetch = require('node-fetch')

Enzyme.configure({ adapter: new Adapter() });

describe('<App /> rendering', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should find the h2 header existence', () => {
    let wrapper = shallow(<App />);
    let header = wrapper.find('#head');
    expect(header).toHaveLength(1);
  });

  it('renders divider line in App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(
      <div
        id="h2divide"> --------------------------------------------
      </div>
    )).toEqual(true);
  });



});
