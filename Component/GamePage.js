import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Alert, Image, StyleSheet, Text, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TileMap, Loop, Stage, World } from 'react-game-kit/native';
import WaterTileMap from './GameAssets/WaterTileMap.js'
import ShipSprite from './GameAssets/Sprite.js';
import ShipSprite2 from './GameAssets/Sprite2.js';


export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalMove: [0, 1],
      horizontalMove: [0, 100],
      currentPlayer: 1,
      playerMove: 48,
      island1: [-502, 90, -453, 21],
      island2: [-4, 258, 65, 189],
    }
  }
  winPageNav(){
    this.props.navigation.navigate('EndingPage');
  }

  upPress = () => {
    if((this.state.verticalMove[0] > this.state.island1[0]
        && this.state.verticalMove[0] < this.state.island1[2]
        && this.state.horizontalMove[0] < this.state.island1[1]
        && this.state.horizontalMove[0] > this.state.island1[3])
        ||
        (this.state.verticalMove[0] > this.state.island2[0]
        && this.state.verticalMove[0] < this.state.island2[2]
        && this.state.horizontalMove[0] < this.state.island2[1]
        && this.state.horizontalMove[0] > this.state.island2[3]))
    {
      this.winPageNav();
    } else if (this.state.verticalMove[0] > -576) {
      this.setState({
        verticalMove: [this.state.verticalMove[0] - this.state.playerMove, this.state.verticalMove[1]]
      });
    } else {
      this.setState({
        verticalMove: [96, this.state.verticalMove[1]]
      });
    }
  }

  downPress = () => {
    if((this.state.verticalMove[0] > this.state.island1[0]
        && this.state.verticalMove[0] < this.state.island1[2]
        && this.state.horizontalMove[0] < this.state.island1[1]
        && this.state.horizontalMove[0] > this.state.island1[3])
        ||
        (this.state.verticalMove[0] > this.state.island2[0]
        && this.state.verticalMove[0] < this.state.island2[2]
        && this.state.horizontalMove[0] < this.state.island2[1]
        && this.state.horizontalMove[0] > this.state.island2[3]))
    {
      this.winPageNav();
    } else if(this.state.verticalMove[0] < 134){
      this.setState({
        verticalMove: [this.state.verticalMove[0] + this.state.playerMove, this.state.verticalMove[1]]
      });
    } else {
      this.setState({
        verticalMove: [-624, this.state.verticalMove[1]]
      });
    }
  }

  leftPress = () => {
    if((this.state.verticalMove[0] > this.state.island1[0]
        && this.state.verticalMove[0] < this.state.island1[2]
        && this.state.horizontalMove[0] < this.state.island1[1]
        && this.state.horizontalMove[0] > this.state.island1[3])
        ||
        (this.state.verticalMove[0] > this.state.island2[0]
        && this.state.verticalMove[0] < this.state.island2[2]
        && this.state.horizontalMove[0] < this.state.island2[1]
        && this.state.horizontalMove[0] > this.state.island2[3]))
    {
      this.winPageNav();
    } else if(this.state.horizontalMove[0] >  -24){
      this.setState({
        horizontalMove: [this.state.horizontalMove[0] - this.state.playerMove, this.state.horizontalMove[1]]
      });
    } else {
      this.setState({
        horizontalMove: [336, this.state.horizontalMove[1]]
      });
    }
  }

  rightPress = () => {
    if((this.state.verticalMove[0] > this.state.island1[0]
        && this.state.verticalMove[0] < this.state.island1[2]
        && this.state.horizontalMove[0] < this.state.island1[1]
        && this.state.horizontalMove[0] > this.state.island1[3])
        ||
        (this.state.verticalMove[0] > this.state.island2[0]
        && this.state.verticalMove[0] < this.state.island2[2]
        && this.state.horizontalMove[0] < this.state.island2[1]
        && this.state.horizontalMove[0] > this.state.island2[3]))
    {
      this.winPageNav();
    } else if(this.state.horizontalMove[0] <  336){
      this.setState({
        horizontalMove: [this.state.horizontalMove[0] + this.state.playerMove, this.state.horizontalMove[1]]
      });
    } else {
      this.setState({
        horizontalMove: [-24, this.state.horizontalMove[1]]
      });
    }
  }

  render() {
    return(
      <Loop>
        <Stage width={576} height={1024}>
          <World>
            <WaterTileMap />
            <TouchableOpacity
              style={{top: 175, left: 182, zIndex: 10, width: 50, height:50}}
              onPress= {this.upPress}>
                <Image
                  source={require("./Assets/Images/Arrow.png")}
                  style={{width: 50, height: 50}}
                />
            </TouchableOpacity>
            <TouchableOpacity
              style={{top: 200, left: 182, zIndex: 10, width: 50, height:50}}
              onPress= {this.downPress}>
                <Image
                  source={require("./Assets/Images/Arrow.png")}
                  style={{width: 50, height: 50, transform: [{rotate: "180deg"}]}}
                />
            </TouchableOpacity>
            <TouchableOpacity
              style={{top: 112, left: 230, zIndex: 10, width: 50, height:50}}
              onPress= {this.rightPress}>
                <Image
                  source={require("./Assets/Images/Arrow.png")}
                  style={{width: 50, height: 50, transform: [{rotate: "90deg"}]}}
                />
            </TouchableOpacity>
            <TouchableOpacity
              style={{top: 62, left: 135, zIndex: 10, width: 50, height:50}}
              onPress= {this.leftPress}>
                <Image
                  source={require("./Assets/Images/Arrow.png")}
                  style={{width: 50, height: 50, transform: [{rotate: "270deg"}]}}
                />
            </TouchableOpacity>
            <ShipSprite
              upArrow={this.state.verticalMove[0]}
              leftArrow={this.state.horizontalMove[0]}
            />
            <ShipSprite2
              upArrow2 ={this.state.verticalMove[1]}
              leftArrow2 ={this.state.horizontalMove[1]}
              />
          </World>
        </Stage>
      </Loop>
    );
  }
}
