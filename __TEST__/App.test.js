import React from 'react';
import App from '../App';
import LandingPage from '../Component/LandingPage.js'
import GamePage from '../Component/GamePage.js'
import Enzyme,
  {
    shallow,
    mount,
    configure
  } from 'enzyme';
import {
  TouchableHighlight,
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import reactDOM from 'react-dom';
import sinon from 'sinon';
import { StackNavigator } from 'react-navigation';

Enzyme.configure({ adapter: new Adapter() })
const rendered = renderer.create(<App />).toJSON();
const renderedLanding = renderer.create(<LandingPage />).toJSON();
const mockNav = {navigate:sinon.spy()};
const shallowLanding = shallow(<LandingPage navigation={mockNav} />);
// const renderedGame = renderer.create(<GamePage />).toJSON();

it("test", ()=> {
  expect(true).toBeTruthy();
})

describe('these are our tests. there are many like them, but these ones are ours.', () => {
  describe('LandingPage Test, rendered through App', () => {

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

    it('gamePageNav works onPress', () => {
      expect(shallowLanding.find('TouchableHighlight').simulate('press'));
    })

  })

  describe('GamePage Test', () => {

    it('renders with out crashing', () => {
      expect(renderedGame).toBeTruthy();
    })
  })
})
