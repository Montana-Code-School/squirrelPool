import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Alert, Image, StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import GamePage from './Gamepage.js'


export default class LandingPage extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

constructor(props, context) {
  super(props, context);
    this._onForward = this._onForward.bind(this);
}

_onForward() {
  let nextIndex = ++this.props.index;
  this.props.navigator.push({
    component: GamePage,
    title: 'Landing Page ',
    passProps: {index: nextIndex},
  })
}

_handleNextPress(nextRoute) {
  this.props.navigator.push(nextRoute);
}

  render () {
    const nextRoute = {
      component: GamePage,
      title: "Game Page",
      passProps: {index: 2}
    }
    return (
      <View style={landingPageStyle.container}>
        <Text style={landingPageStyle.superTitle}>TEXT FROM LANDINGPirateE</Text>
        <Image source={require('./Images/ShipRight.png')}
          resizeMode= 'contain'
          style={landingPageStyle.landingImage}
         />
        <Text style={landingPageStyle.landingTitle}>Second Text!</Text>
        <TouchableHighlight
          style={landingPageStyle.startButton}
          onPress={() => this._handleNextPress(nextRoute)}>
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
