jest.unmock('../App');

import React from 'react';
import {shallow} from 'enzyme';

import App from '../App';

describe('<App />', () => {
  
  it('renders the expected text inside the box', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h1>React Min Production Boilerplate</h1>)).toBe(true);
    expect(wrapper.contains(<p>The boilerplate is up and running!</p>)).toBe(true);
    expect(wrapper.contains(
      <a href="https://github.com/ferrannp/react-min-production-boilerplate.git">
        react-min-production-boilerplate</a>))
      .toBe(true);
  });
  
});