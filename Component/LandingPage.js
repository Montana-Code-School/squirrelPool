import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Alert, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GamePage from './GamePage.js'
import AppyHelperton from '../Helpers/AppyHelperton.js';


export default class LandingPage extends React.Component {

constructor(props) {
  super(props);
}

gamePageNav(e){
  this.props.navigation.navigate('GamePage');
}


  render () {
    return (
      <View style={landingPageStyle.container}>
        <Text style={landingPageStyle.superTitle}>TEXT FROM LANDING Pirate</Text>
        <Image source={require('./Assets/Images/ShipRight.png')}
          resizeMode= 'contain'
          style={landingPageStyle.landingImage}
         />
        <Text style={landingPageStyle.landingTitle}>Second Text!</Text>
        <TouchableHighlight
          style={landingPageStyle.startButton}
          onPress={(e) => this.gamePageNav(e)}>
            <Text>START</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const landingPageStyle = StyleSheet.create({
  container: {
    backgroundColor: '#a8ecff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  startButton: {
    flex: 0,
    backgroundColor: '#ff00ff',
    marginBottom: 100,
  },
  superTitle: {
    flex: 1,
    color: '#000',
    marginTop: 100,
  },
  landingTitle: {
    flex: 2,
  },
  landingImage: {
    flex: 3,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
