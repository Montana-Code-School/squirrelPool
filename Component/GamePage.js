import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Alert, Image, StyleSheet, Text, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TileMap, Loop, Stage, World } from 'react-game-kit/native';
import WaterTileMap from './GameAssets/WaterTileMap.js'
import ShipSprite from './GameAssets/Sprite.js';

export default class GamePage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    verticalMove: 0,
    horizontalMove: 0,
    playerMove: 25
  }
}

upPress = () => {
  this.setState({
    verticalMove: this.state.verticalMove - this.state.playerMove
  });
}

downPress = () => {
  this.setState({
    verticalMove: this.state.verticalMove + this.state.playerMove
  });
}
leftPress = () => {
  this.setState({
    horizontalMove: this.state.horizontalMove - this.state.playerMove
  });
}
rightPress = () => {
  this.setState({
    horizontalMove: this.state.horizontalMove + this.state.playerMove
  });
}


  render() {
    return(
      <Loop>
        <Stage width={576} height={1024}>
        <World>
            <WaterTileMap />
              <TouchableOpacity style={{top: -325, left: "44%", zIndex: 10, width: 50, height:50}} onPress= {this.upPress}>
                <Image source={require("./Assets/Images/Arrow.png")} style={{width: 50, height: 50}} />
              </TouchableOpacity>
              <TouchableOpacity style={{top: 300, left: "44%", zIndex: 10, width: 50, height:50}} onPress= {this.downPress}>
                <Image source={require("./Assets/Images/Arrow.png")} style={{width: 50, height: 50, transform: [{rotate: "180deg"}]}} />
              </TouchableOpacity>
              <TouchableOpacity style={{top: "-10%", left: 370, zIndex: 10, width: 50, height:50}} onPress= {this.rightPress}>
                <Image source={require("./Assets/Images/Arrow.png")} style={{width: 50, height: 50, transform: [{rotate: "90deg"}]}} />
              </TouchableOpacity>
              <TouchableOpacity style={{top: "-17%", left: 0, zIndex: 10, width: 50, height:50}} onPress= {this.leftPress}>
                <Image source={require("./Assets/Images/Arrow.png")} style={{width: 50, height: 50, transform: [{rotate: "270deg"}]}} />
              </TouchableOpacity>
              <ShipSprite upArrow={this.state.verticalMove} leftArrow={this.state.horizontalMove} />
          </World>
        </Stage>
      </Loop>
    );
  }
}
