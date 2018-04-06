import React from 'react';
import { Button, Alert, Image, StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native'


export default Class landingPage extends React.Component {
  Constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={landingPageStyle.container}>
        <Text style={landingPageStyle.superTitle}>TEXT FROM LANDINGPirateE</Text>
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
    backgroundColor: 'FFFF00',
  },
  superTitle: {
    color: '#000'
  },
  landingTitle: {
  },
  landingImage: {
  },
});
