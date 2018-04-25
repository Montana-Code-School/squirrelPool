import React from 'react';
import { YellowBox, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import GamePage from './Component/GamePage.js';
import LandingPage from './Component/LandingPage.js';
import EndingPage from './Component/EndingPage.js';
import EndingPage2 from './Component/EndingPage2.js';
import InstructionPage from './Component/Instruction.js';
import { StackNavigator } from 'react-navigation';

const RootStack =
  StackNavigator({
    //title page
    LandingPage: {
      screen: LandingPage,
      name: 'Landing Page',
    },
    //main game page
    GamePage: {
      screen: GamePage,
      name: 'Game Page',
    },
    //red team winning page
    EndingPage: {
      screen: EndingPage,
      name: 'End Page',
    },
    //green team winning page
    EndingPage2: {
      screen: EndingPage2,
      name: 'End Page 2',
    },
    //basic instruction page
    InstructionPage: {
      screen: InstructionPage,
      name: 'Instructions',
    }
  },
  //this page is the default first rendered
  {initialRouteName: 'LandingPage',
   headerMode: 'none'
  }
)
//where the game is rendered
export default class App extends React.Component {
  render() {
    return (
      <View style={ styleAppPage.container } >
        <RootStack />
      </View>
    );
  }
}

const styleAppPage = StyleSheet.create({
  container:{
    flex: 1
  }
});
//this is to prevent yellow warning boxes from showing on simulations
console.disableYellowBox = true;
