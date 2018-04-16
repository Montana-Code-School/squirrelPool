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
import ShipSprite from '../Component/GameAssets/Sprite.js';

Enzyme.configure({ adapter: new Adapter() })
const shipTest = shallow(<ShipSprite src=""/>)
console.log(shipTest);
it("test", ()=> {
  expect(true).toBeTruthy();
})
