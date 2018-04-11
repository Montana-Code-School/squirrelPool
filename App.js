import React from 'react';
import { TouchableHighlight, Alert, Image, StyleSheet, Text, View } from 'react-native';
import LandingPage from './Component/LandingPage.js';
import PropTypes from 'prop-types';
import GamePage from './Component/GamePage.js';
import { StackNavigator } from 'react-navigation';

const RootStack =
  StackNavigator({
    LandingPage: {
      screen: LandingPage,
      name: 'Landing Page',
    },
    GamePage: {
      screen: GamePage,
      name: 'Game Page',
    },
  },
  {initialRouteName: 'LandingPage'}
)

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
