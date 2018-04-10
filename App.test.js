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
 console.log("vvvvv rendered vvvvv");
 console.log(rendered);
 console.log("vvv Rendered type vvvv");
 console.log(rendered.type);
 console.log("vvvvv rendered props vvvv");
 console.log(rendered.props);
 console.log("vvvvvv rendered.children vvvvv");
 console.log(rendered.children);
 console.log("RENDERED.CHILDREN CONTENTS");
 console.log("vvvvvv rendered.children[0].type vvvvv");
 console.log(rendered.children[0].type);
 console.log("vvvvv rendered children[0].props vvvvvv");
 console.log(rendered.children[0].props);
 console.log("vvvvv rendered.children[0].children vvvvvvvv");
 console.log(rendered.children[0].children);
 console.log("vvvvv rendered.children[0].children[0] vvvvvvvv");
 console.log(rendered.children[0].children[0]);
 console.log("vvvvv rendered.children[0].children[0].children vvvvvvvv");
 console.log(rendered.children[0].children[0].children[0]);
console.log(rendered.children[0].children[0].children[0].children);
console.log(rendered.children[0].children[0].children[0].children[2].props.accessibilityComponentType);
console.log(rendered.children[0].children[0].children[0].children[2].children);
console.log(rendered.children[0].children[0].children[0].children[2].children[0]);
console.log(rendered.children[0].children[0].children[0].children[2].children[0].children);
console.log(rendered.children[0].children[0].children[0].children[2].children[0].children[0].children);

  it('renders without crashing', () => {
  expect(rendered).toBeTruthy();
  });

  it('contains a button that exists', () => {
    expect(
      rendered
      .children[0]
      .children[0]
      .children[0]
      .children[2]
      .props
      .accessibilityComponentType
    )
    .toBe('button')
  });

  it('has a title', () => {
    expect(
      rendered
      .children[0]
      .children[0]
      .props
      .initialRoute
      .title
    )
    .toBe('Nuts N Boats')
  })
})
