import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GamePage from './GamePage.js';
import { Font } from 'expo';

export default class InstructionPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      press: 0,
      fontLoaded: false,
    }
  }

  //font
  async componentDidMount() {
    await Font.loadAsync({
      'TradeWinds-Regular': require('./Assets/TradeWinds-Regular.ttf')
    });
    this.setState({
      fontLoaded: true
    });
  }

  //navigates to Game page
  gamePageNav(e){
    this.setState({
      press: this.state.press + 1,
    });
    if (this.state.press == 0) {
      this.props.navigation.navigate('GamePage');
    }
  }

  //includes title, paragraph, and clickable 'tap here to play' highlight
  render () {
    return (
      <View style={instructionPageStyle.container}>
        {
          this.state.fontLoaded ? (
            <View style={instructionPageStyle.container}>
              <Text style = {instructionPageStyle.title}>
                How t' Play:
              </Text>
              <Text style={instructionPageStyle.main}>
              Players alternate turns movin' thar color o' galleon across th' map usin'
              th' arrow buttons. Th' whirlpools will cause ye t' lose a turn. Th' first
              player t' leave th' island wit' th' loot be th' winner!
              </Text>
              <TouchableWithoutFeedback style={instructionPageStyle.touchable}
              onPress={(e) => this.gamePageNav(e)}>
                <Text style={instructionPageStyle.touchable}>
                  Tap here to play
                </Text>
              </TouchableWithoutFeedback>
            </View>
          ) : null
        }
      </View>
    );
  }
}

//instruction page styling
const instructionPageStyle = StyleSheet.create({
  container: {
    backgroundColor: '#a8ecff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
    title: {
      flex: 2,
      alignItems: 'center',
      fontWeight: 'bold',
      marginTop: 100,
      fontSize: 35,
      fontFamily: 'TradeWinds-Regular'
    },
    main: {
      flex: 2,
      alignItems: 'center',
      textAlign: 'center',
      height: '100%',
      fontSize: 20,
      marginTop: -100,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: 'TradeWinds-Regular'
    },
    touchable: {
      flex: 1,
      marginTop: 75,
      fontSize: 20,
      fontFamily: 'TradeWinds-Regular'
    }
});
