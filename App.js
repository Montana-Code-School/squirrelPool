import React from 'react';
import { TouchableHighlight, Alert, Image, StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import LandingPage from './Component/Landingpage.js';
import PropTypes from 'prop-types';
import GamePage from './Component/Gamepage.js'

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS style = {styleAppPage.wrapper}
        initialRoute={{
          component: LandingPage,
          title: 'Nuts N Boats',
          passProps: {index: 1},
        }}
        Route = {{
          component: GamePage,
          title: 'Game Page',
          passProps: {index: 2}
        }}
      />
      //<LandingPage />
    );
  }
}

const styleAppPage = StyleSheet.create({
  wrapper:{
    flex: 1
  }
})
