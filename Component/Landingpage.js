import React from 'react';
import PropTypes from 'prop-types';
import { Button, Alert, Image, StyleSheet, Text, View, NavigatorIOS } from 'react-native';


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
    component: FirstPage,
    title: 'Landing Page ' + nextIndex,
    passProps: {index: nextIndex},
  })
}

  render () {
    return (
      <View style={landingPageStyle.container}>
        <Text>TEXT FROM LANDINGPirateE</Text>
        <Text>Second Text!</Text>
        <Button
          style={landingPageStyle.startButton}
          onPress={this._onForward}
          title="START"
        />

      </View>
    );
  }
}

//react-navigation please install

const landingPageStyle = StyleSheet.create({
  container: {
    backgroundColor: '#a8ecff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    backgroundColor: '#ff00ff',
  },
  superTitle: {
    color: '#000'
  },
  landingTitle: {
  },
  landingImage: {
  },
});
