import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
it('has a button on the front page', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered.children[3].props.accessibilityComponentType === 'button').toBe(true);
});
