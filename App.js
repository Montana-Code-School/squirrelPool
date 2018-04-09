import React from 'react';
import { Button, Alert, Image, StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import LandingPage from './Component/Landingpage.js';
import PropTypes from 'prop-types'

export default class App extends React.Component {
  render() {
    return (
      <LandingPage />
    );
  }
}
