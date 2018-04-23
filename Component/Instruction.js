import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GamePage from './GamePage.js'

export default class InstructionPage extends React.Component {

constructor(props) {
  super(props);
}

gamePageNav(e){
  this.props.navigation.navigate('GamePage');
}

  render () {
    return (
      <View style={landingPageStyle.container}>
        <TouchableWithoutFeedback onPress={(e) => this.gamePageNav(e)}>
          <Text style={{width: '60%', fontSize: 25}}>
            How t' Play:
            {"\n"}{"\n"}{"\n"}
            Players alternate turns movin' thar color o' galleon across th' map usin'
            th' arrow buttons. Th' whirlpools will cause ye t' lose a turn. Th' first
            player t' leave th' island wit' th' loot be th' winner!
          </Text>
        </TouchableWithoutFeedback>
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
});
