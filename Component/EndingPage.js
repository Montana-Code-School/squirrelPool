import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class EndingPage extends React.Component {

constructor(props) {
  super(props);
}
landPageNav(e){
  this.props.navigation.navigate('LandingPage');
}

  render () {
    return (
      <View>
      <Text>Ahoy! Admiral Acorn Wins!</Text>
        <TouchableHighlight
          onPress={(e) => this.landPageNav(e)}>
        <Image
          source={require("./Assets/Images/SQUIRRELWIN1.png")}
          style={{width: '100%', height: '100%'}}
        />
        </TouchableHighlight>
      </View>
    );
  }
}
