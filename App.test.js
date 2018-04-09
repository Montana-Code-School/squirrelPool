import React from 'react';
import App from './App';
import { shallow, mount, configure } from 'enzyme';
import { Button } from "react-native";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import reactDOM from 'react-dom';

configure({
  adapter: new Adapter()
})
describe('these are our tests. there are many like them, but these ones are ours.', () => {
  it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  console.log(rendered, "<<<<<<<<<<<<<<<")
  expect(rendered).toBeTruthy();
  });
})
