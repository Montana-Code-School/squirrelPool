import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo';

export default class EndingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      'TradeWinds-Regular': require('./Assets/TradeWinds-Regular.ttf')
    });
    this.setState({
      fontLoaded: true
    });
  }
  landPageNav(e){
    this.props.navigation.navigate('LandingPage');
  }

  render () {
    return (
      <View style={endingPageStyle.main}>
        {
          this.state.fontLoaded ? (
            <Text style={endingPageStyle.win}>
              Ahoy! Admiral Acorn Wins!
            </Text>
          ) : null
        }
        <TouchableHighlight
          onPress={(e) => this.landPageNav(e)}
          style={endingPageStyle.touch}>
          <Image
            source={require("./Assets/Images/SQUIRRELWIN1.png")}
            style={endingPageStyle.image}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const endingPageStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgb(225,0,7)',
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
