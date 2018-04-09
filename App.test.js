import React from 'react';
import App from './App';
import { shallow, mount, configure } from 'enzyme';
import { Button } from "react-native";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import reactDOM from 'react-dom';


const rendered = renderer.create(<App />).toJSON();

configure({
  adapter: new Adapter()
})
describe('these are our tests. there are many like them, but these ones are ours.', () => {
  console.log("FULL FILE CONTENTS");
  console.log(rendered);
  console.log("^^^^^ rendered ^^^^^");
  console.log(rendered.children);
  console.log("^^^^^^ rendered.children ^^^^^");
  console.log(rendered.type);
  console.log("^^^Rendered type^^^^");
  console.log(rendered.props);
  console.log("^^^^^rendered props^^^^");
  it('renders without crashing', () => {
  expect(rendered).toBeTruthy();
  });
})
