import React from 'react';
import { Button, Alert, Image, StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import LandingPage from './Component/Landingpage.js';
import PropTypes from 'prop-types'

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS style = {styleAppPage.wrapper}
        initialRoute={{
          component: LandingPage,
          title: 'Nuts N Boats',
          passProps: {index: 1},
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
