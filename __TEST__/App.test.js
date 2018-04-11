import React from 'react';
import App from '.././App';
import LandingPage from '.././Component/Landingpage.js'
import GamePage from '.././Component/Gamepage.js'
import Enzyme, { shallow, mount, configure } from 'enzyme';
import { TouchableHighlight, Alert, Image, StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import reactDOM from 'react-dom';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() })
// const onTestPress = sinon.spy();
// const onNavigate = sinon.spy();
// const landShallow = shallow(<LandingPage navigator={{push:onNavigate}} onPress={onTestPress } />);
//const gameShallow = shallow(<GamePage />);
const rendered = renderer.create(<App />).toJSON();

describe('these are our tests. there are many like them, but these ones are ours.', () => {
// console.log("FULL FILE CONTENTS");
// console.log("vvvvv rendered vvvvv");
// console.log(rendered);
// console.log("vvv Rendered type vvvv");
// console.log(rendered.type);
// console.log("vvvvv rendered props vvvv");
// console.log(rendered.props);
// console.log("vvvvvv rendered.children vvvvv");
// console.log(rendered.children);
// console.log("RENDERED.CHILDREN CONTENTS");
// console.log(rendered.children[0].type);
// console.log("vvvvv rendered children[0].props vvvvvv");
// console.log(rendered.children[0].props);
// console.log("vvvvv rendered.children[0].children vvvvvvvv");
// console.log(rendered.children[0].children);
// console.log("vvvvv rendered.children[0].children[0] vvvvvvvv");
// console.log(rendered.children[0].children[0]);
// console.log("vvvvv rendered.children[0].children[0].children vvvvvvvv");
// console.log(rendered.children[0].children[0].children);
// console.log(rendered.children[0].children[0].children[0].children);
// console.log(rendered.children[0].children[0].children[0].children[0]);
// console.log(rendered.children[0].children[0].children[0].children[0].children);
// console.log(rendered.children[0].children[0].children[0].children[0].children[0]);
// console.log(rendered.children[0].children[0].children[0].children[0].children[0].children);
// console.log(rendered.children[0].children[0].children[0].children[0].children[0].children[0].children);

  it('renders without crashing', () => {
  expect(rendered).toBeTruthy();
  });

  it('has four elements; text(landingpirate), image, text(secondtext), touchablehighlight', () => {
    expect(
      rendered
      .children[0]
      .children[0]
      .children[0]
      .children[0]
      .children[0]
      .children
      .length
    )
    .toBe(4)
  })

  it('child [0] is text(landingpirate)', () => {
    expect(
      rendered
      .children[0]
      .children[0]
      .children[0]
      .children[0]
      .children[0]
      .children[0]
      .children[0]
    )
    .toBe('TEXT FROM LANDING Pirate')
  })

  })
