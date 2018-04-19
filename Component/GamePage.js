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
      verticalMove: -384,
      horizontalMove: 48,
      playerMove: 24,
      island1: [-552, 90, -483, 21]
    }
  }

// const island1VertCollision = (this.state.verticalMove > this.state.island1[0])
//     && (this.state.verticalMove < this.state.island1[2]);
// const island1HorzCollision = (this.state.horizontalMove > this.state.island1[1]
//     && this.state.horizontalMove < this.state.island1[3]);

  upPress = () => {
    if(this.state.verticalMove > this.state.island1[0]
        && this.state.verticalMove < this.state.island1[2]
        && this.state.horizontalMove < this.state.island1[1]
        && this.state.horizontalMove > this.state.island1[3])
    {
      console.log("arrr");
    } else if (this.state.verticalMove > -624) {
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
    if(this.state.verticalMove > (this.state.island1[0] - 31)
        && this.state.verticalMove < (this.state.island1[2] - 31)
        && this.state.horizontalMove < this.state.island1[1]
        && this.state.horizontalMove > this.state.island1[3])
    {
      console.log("arrr");
    } else if(this.state.verticalMove < 96){
      this.setState({
        verticalMove: this.state.verticalMove + this.state.playerMove
      });
    } else {
      this.setState({
        verticalMove: -624
      });
    }
  }

  leftPress = () => {
    if(this.state.verticalMove > (this.state.island1[0] - 31)
        && this.state.verticalMove < (this.state.island1[2] - 31)
        && this.state.horizontalMove < (this.state.island1[1] + 16)
        && this.state.horizontalMove > (this.state.island1[3] + 16))
    {
      console.log("arrr");
    } else if(this.state.horizontalMove >  -24){
      this.setState({
        horizontalMove: this.state.horizontalMove - this.state.playerMove
      });
    } else {
      this.setState({
        horizontalMove: 336
      });
    }
  }

  rightPress = () => {
    if(this.state.verticalMove > (this.state.island1[0] - 31)
        && this.state.verticalMove < (this.state.island1[2] - 31)
        && this.state.horizontalMove < (this.state.island1[1])
        && this.state.horizontalMove > (this.state.island1[3]))
    {
      console.log("arrr");
    } else if(this.state.horizontalMove <  336){
      this.setState({
        horizontalMove: this.state.horizontalMove + this.state.playerMove
      });
    } else {
      this.setState({
        horizontalMove: -24
      });
    }
  }

  logPress = () => {
    console.log("top: ", this.state.verticalMove);
    console.log("left: ", this.state.horizontalMove);
    console.log("bottom: ", this.state.verticalMove + 50);
    console.log("right: ", this.state.horizontalMove + 50);
  }

  render() {
    return(
      <Loop>
        <Stage width={576} height={1024}>
          <World>
            <WaterTileMap />
            <TouchableOpacity
              style={{top: 225, left: 182, zIndex: 10, width: 50, height:50}}
              onPress= {this.upPress}>
                <Image
                  source={require("./Assets/Images/Arrow.png")}
                  style={{width: 50, height: 50}}
                />
            </TouchableOpacity>
            <TouchableOpacity
              style={{top: 250, left: 182, zIndex: 10, width: 50, height:50}}
              onPress= {this.downPress}>
                <Image
                  source={require("./Assets/Images/Arrow.png")}
                  style={{width: 50, height: 50, transform: [{rotate: "180deg"}]}}
                />
            </TouchableOpacity>
            <TouchableOpacity
              style={{top: 162, left: 230, zIndex: 10, width: 50, height:50}}
              onPress= {this.rightPress}>
                <Image
                  source={require("./Assets/Images/Arrow.png")}
                  style={{width: 50, height: 50, transform: [{rotate: "90deg"}]}}
                />
            </TouchableOpacity>
            <TouchableOpacity
              style={{top: 112, left: 135, zIndex: 10, width: 50, height:50}}
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
            <TouchableOpacity
              style={{top: 0, left: 35, zIndex: 10, width: 50, height:50}}
              onPress= {this.logPress}>
                <Image
                  source={require("./Assets/Images/Arrow.png")}
                  style={{width: 50, height: 50, transform: [{rotate: "270deg"}]}}
                />
            </TouchableOpacity>
          </World>
        </Stage>
      </Loop>
    );
  }
}
