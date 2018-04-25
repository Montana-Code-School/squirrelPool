import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import InstructionPage from './Instruction.js';
import { Font } from 'expo';

export default class LandingPage extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    press: 0,
    fontLoaded: false,
  }
}

async componentDidMount() {
  await Font.loadAsync({
    'TradeWinds-Regular': require('./Assets/TradeWinds-Regular.ttf')
  });
  this.setState({
    fontLoaded: true
  });
}

gamePageNav(e){
  this.props.navigation.navigate('InstructionPage');
}

  render () {
    return (
      <View style={landingPageStyle.container}>
        { this.state.fontLoaded ? (
        <View style={landingPageStyle.container}>
          <Text style={landingPageStyle.superTitle}>Anchors 'n' Acorns</Text>
          <Text style={landingPageStyle.subTitle}>A "Nutical" Adventure!</Text>
          <Image source={require('./Assets/Images/SKULL1.png')}
            resizeMode= 'contain'
            style={landingPageStyle.landingImage}
           />
          <Text style={landingPageStyle.startTitle}>Start Yer Adventure</Text>
          <TouchableWithoutFeedback
          style={landingPageStyle.startButton}
            onPress={(e) => this.gamePageNav(e)}>
              <Image source={require('./Assets/Images/FLAG.png')}
              style={landingPageStyle.startButton}
           />
          </TouchableWithoutFeedback>
        </View>
      ) : null
        }
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
    flex: 1,
    width: 50,
    height: 50,
    marginTop: -50,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    fontFamily: 'TradeWinds-Regular'
  },
  superTitle: {
    flex: 1,
    color: '#000',
    marginTop: 100,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'TradeWinds-Regular'
  },
  landingImage: {
    flex: 3,
    width: 400,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
   subTitle: {
     flex: 1,
     fontSize: 25,
     fontStyle: 'italic',
     fontFamily: 'TradeWinds-Regular'
},
  startTitle: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'TradeWinds-Regular'
  },
});
