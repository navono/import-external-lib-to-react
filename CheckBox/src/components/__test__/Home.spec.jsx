import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';


function setup() {
  const component = shallow(
    <Home />
  );

  return {
    component,
    title: component.find('h2'),
  };
}

describe('Home component', () => {
  it('should display home', () => {
    const { title } = setup();
    expect(title.text()).toMatch(/^Home$/);
  });
})
