import App from './components/App.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import React from 'react';

// const fetch = require('node-fetch')

Enzyme.configure({ adapter: new Adapter() });

describe('<App /> rendering', () => {
  it('should render one <h2>', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.children('h2')).toHaveLength(1);
  });


});

