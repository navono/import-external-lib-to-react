import React from 'react';
import { spy } from 'sinon';
import { mount } from 'enzyme';
import Counter from '../Counter';

function setup() {
  const component = mount(
    <Counter />
  );

  return {
    component,
    buttons: component.find('.button'),
    p: component.find('#count')
  };
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup();
    expect(p.text()).toMatch(/^0$/);
  });

  it('should call increment', () => {
    const { p, buttons, actions } = setup();
    buttons.at(0).simulate('click');
    expect(p.text()).toMatch(/^1$/);
  });

  it('should call decrement', () => {
    const { p, buttons, actions } = setup();
    buttons.at(1).simulate('click');
    expect(p.text()).toMatch(/^-1$/);
  });
})
