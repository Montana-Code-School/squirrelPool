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
    verticalMove: -240,
    horizontalMove: 240,
    playerMove: 24
  }
}

upPress = () => {
  if (this.state.verticalMove > -600) {
    this.setState({
      verticalMove: this.state.verticalMove - this.state.playerMove
    });
  } else {
    this.setState({
      verticalMove: 96
    });
  }
}

downPress = () => {
  if(this.state.verticalMove < 96){
    this.setState({
      verticalMove: this.state.verticalMove + this.state.playerMove
    });
  } else {
    this.setState({
      verticalMove: -600
    });
  }
}
leftPress = () => {
  if(this.state.horizontalMove >  -48){
    this.setState({
      horizontalMove: this.state.horizontalMove - this.state.playerMove
    });
  } else {
    this.setState({
      horizontalMove: 312
    });
  }
}
rightPress = () => {
  if(this.state.horizontalMove <  312){
    this.setState({
      horizontalMove: this.state.horizontalMove + this.state.playerMove
    });
  }
}
logPress = () => {
  console.log("top: ", this.state.verticalMove);
  console.log("left: ", this.state.horizontalMove);
}



  render() {
    return(
      <Loop>
        <Stage width={576} height={1024}>
        <World>
            <WaterTileMap />
              <TouchableOpacity
                style={{top: 275, left: 182, zIndex: 10, width: 50, height:50}}
                onPress= {this.upPress}>
                  <Image
                    source={require("./Assets/Images/Arrow.png")}
                    style={{width: 50, height: 50}}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                style={{top: 300, left: 182, zIndex: 10, width: 50, height:50}}
                onPress= {this.downPress}>
                  <Image
                    source={require("./Assets/Images/Arrow.png")}
                    style={{width: 50, height: 50, transform: [{rotate: "180deg"}]}}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                style={{top: 212, left: 230, zIndex: 10, width: 50, height:50}}
                onPress= {this.rightPress}>
                  <Image
                    source={require("./Assets/Images/Arrow.png")}
                    style={{width: 50, height: 50, transform: [{rotate: "90deg"}]}}
                  />
              </TouchableOpacity>
              <TouchableOpacity
                style={{top: 162, left: 135, zIndex: 10, width: 50, height:50}}
                onPress= {this.leftPress}>
                  <Image
                    source={require("./Assets/Images/Arrow.png")}
                    style={{width: 50, height: 50, transform: [{rotate: "270deg"}]}}
                  />
              </TouchableOpacity>
              <ShipSprite
                upArrow={this.state.verticalMove}
                leftArrow={this.state.horizontalMove}
              />

          </World>
        </Stage>
      </Loop>
    );
  }
}
