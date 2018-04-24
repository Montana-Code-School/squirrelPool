import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import InstructionPage from './Instruction.js'

export default class LandingPage extends React.Component {

constructor(props) {
  super(props);
}

gamePageNav(e){
  this.props.navigation.navigate('InstructionPage');
}

  render () {
    return (
      <View style={landingPageStyle.container}>
        <Text style={landingPageStyle.superTitle}>Anchors and Acorns</Text>
        <Text style={landingPageStyle.subTitle}>A 'Nutical' Adventure!</Text>
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
    resizeMode: 'contain'
  },
  superTitle: {
    flex: 1,
    color: '#000',
    marginTop: 100,
    fontSize: 40,
    fontWeight: 'bold'
  },
  landingImage: {
    flex: 3,
    width: 400,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
   subTitle: {
      flex: 1,
      fontSize: 25,
      fontStyle: 'italic'
  },
  startTitle: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold'
  },
});
