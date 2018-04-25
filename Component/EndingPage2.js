import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';

export default class EndingPage2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }

  // The font loading required for Expo
  async componentDidMount() {
    await Font.loadAsync({
      'TradeWinds-Regular': require('./Assets/TradeWinds-Regular.ttf')
    });
    this.setState({
      fontLoaded: true
    });
  }

  // Navigation back to the landing page
  landPageNav(e){
    this.props.navigation.navigate('LandingPage');
  }

  // Displays winning page for player 2
  render () {
    return (
      <View style={endingPage2Style.main}>
        {
          this.state.fontLoaded ? (
            <Text style={endingPage2Style.win}>
              Arrr! Captn' Redtail Wins!
            </Text>
          ) : null
        }
        <TouchableHighlight
        onPress={(e) => this.landPageNav(e)}
        style={endingPage2Style.touch}>
          <Image
          source={require("./Assets/Images/SQUIRRELWIN2.png")}
          style={endingPage2Style.image}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const endingPage2Style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgb(82, 224, 0)',
    zIndex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 10,
    marginTop: -150
  },
  win: {
    fontSize: 50,
    paddingBottom: -500,
    zIndex: 5,
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: 'TradeWinds-Regular'
  },
  touch: {
    flex: 1,
  }
})
