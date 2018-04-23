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
      verticalMove: 0,
      horizontalMove: 0,
      verticalMove2: 0,
      horizontalMove2: 0,
      currentHorizontal: 0,
      currentVertical: 0,
      playerTurn: 0,
      moveCount: 0,
      playerMove: 48,
      island1: [-502, 90, -453, 21],
      island2: [-4, 258, 65, 189],
    }
  }

  winPageNav(){
    this.props.navigation.navigate('EndingPage');
  }

  turnAlternator = () => {
    if (this.state.playerTurn == 0) {
      this.setState({
        currentVertical: this.state.verticalMove,
        currentHorizontal: this.state.horizontalMove
      });
    } else if(this.state.playerTurn == 1) {
      this.setState({
        currentVertical: this.state.verticalMove2,
        currentHorizontal: this.state.horizontalMove2
      });
    }
  }

  placementAssigner = () => {
    if(this.state.playerTurn == 0){
      this.setState({
        verticalMove: this.state.currentVertical,
        horizontalMove: this.state.currentHorizontal
      });
    } else if(this.state.playerTurn == 1) {
      this.setState({
        verticalMove2: this.state.currentVertical,
        horizontalMove2: this.state.currentHorizontal
      })
    }
    console.log("playerTurn >>>", this.state.playerTurn,"currentVertical >>>", this.state.currentVertical, "currentHorizontal >>>", this.state.currentHorizontal, "moveCount >>>", this.state.moveCount);
  }

  turnReset = () => {
    this.setState({moveCount: this.state.moveCount + 1})
    if(this.state.moveCount == 3 && this.state.playerTurn == 0) {
      this.setState({
        playerTurn: 1,
        moveCount: 0,
      });
    } else if(this.state.moveCount == 3 && this.state.playerTurn == 1) {
      this.setState({
        playerTurn: 0,
        moveCount: 0,
      });
    }
  }

  upPress = () => {
    this.turnReset();
    this.placementAssigner();
    this.turnAlternator();
    if((this.state.currentVertical > this.state.island1[0]
        && this.state.currentVertical < this.state.island1[2]
        && this.state.currentHorizontal < this.state.island1[1]
        && this.state.currentHorizontal > this.state.island1[3])
        ||
        (this.state.currentVertical > this.state.island2[0]
        && this.state.currentVertical < this.state.island2[2]
        && this.state.currentHorizontal < this.state.island2[1]
        && this.state.currentHorizontal > this.state.island2[3]))
    {
      this.winPageNav();
    } else if (this.state.currentVertical > -576) {
      this.setState({
        currentVertical: this.state.currentVertical - this.state.playerMove
      });
    } else {
      this.setState({
        currentVertical: 96
      });
    }
    this.placementAssigner();
  }

  downPress = () => {
    this.turnReset();
    this.placementAssigner();
    this.turnAlternator();
    if((this.state.currentVertical > this.state.island1[0]
        && this.state.currentVertical < this.state.island1[2]
        && this.state.currentHorizontal < this.state.island1[1]
        && this.state.currentHorizontal > this.state.island1[3])
        ||
        (this.state.currentVertical > this.state.island2[0]
        && this.state.currentVertical < this.state.island2[2]
        && this.state.currentHorizontal < this.state.island2[1]
        && this.state.currentHorizontal > this.state.island2[3]))
    {
      this.winPageNav();
    } else if(this.state.currentVertical < 134){
      this.setState({
        currentVertical: this.state.currentVertical + this.state.playerMove
      });
    } else {
      this.setState({
        currentVertical: -624
      });
    }
    this.placementAssigner();
  }

  leftPress = () => {
    this.turnReset();
    this.placementAssigner();
    this.turnAlternator();
    if((this.state.currentVertical > this.state.island1[0]
        && this.state.currentVertical < this.state.island1[2]
        && this.state.currentHorizontal < this.state.island1[1]
        && this.state.currentHorizontal > this.state.island1[3])
        ||
        (this.state.currentVertical > this.state.island2[0]
        && this.state.currentVertical < this.state.island2[2]
        && this.state.currentHorizontal < this.state.island2[1]
        && this.state.currentHorizontal > this.state.island2[3]))
    {
      this.winPageNav();
    } else if(this.state.currentHorizontal >  -24){
      this.setState({
        currentHorizontal: this.state.currentHorizontal - this.state.playerMove
      });
    } else {
      this.setState({
        currentHorizontal: 336
      });
    }
    this.placementAssigner();
  }

  rightPress = () => {
    this.turnReset();
    this.placementAssigner();
    this.turnAlternator();
    if((this.state.currentVertical > this.state.island1[0]
        && this.state.currentVertical < this.state.island1[2]
        && this.state.currentHorizontal < this.state.island1[1]
        && this.state.currentHorizontal > this.state.island1[3])
        ||
        (this.state.currentVertical > this.state.island2[0]
        && this.state.currentVertical < this.state.island2[2]
        && this.state.currentHorizontal < this.state.island2[1]
        && this.state.currentHorizontal > this.state.island2[3]))
    {
      this.winPageNav();
    } else if(this.state.currentHorizontal <  336){
      this.setState({
        currentHorizontal: this.state.currentHorizontal + this.state.playerMove
      });
    } else {
      this.setState({
        currentHorizontal: -24
      });
    }
    this.placementAssigner();
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
              upArrow={this.state.verticalMove}
              leftArrow={this.state.horizontalMove}
            />
            <ShipSprite2
              upArrow2 ={this.state.verticalMove2}
              leftArrow2 ={this.state.horizontalMove2}
              />
          </World>
        </Stage>
      </Loop>
    );
  }
}
