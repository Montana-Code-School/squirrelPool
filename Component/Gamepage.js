import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Alert, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class GamePage extends React.Component {
  constructor(props) {
  super(props);
  }
  
  render() {
    return(
      <View>
        <Text> You are now playing the game!
        </Text>
      </View>
    )
  }
}
