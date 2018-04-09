import React from 'react';
import PropTypes from 'prop-types';
import { Button, Alert, Image, StyleSheet, Text, View, NavigatorIOS } from 'react-native';

export default class GamePage extends React.Component {
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
    title: 'Game Page ',
    passProps: {index: nextIndex},
  })
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
