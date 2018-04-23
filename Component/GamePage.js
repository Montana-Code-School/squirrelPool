import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Alert, Image, StyleSheet, Text, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TileMap, Loop, Stage, World } from 'react-game-kit/native';
import WaterTileMap from './GameAssets/WaterTileMap.js'
import ShipSprite from './GameAssets/Sprite.js';
import ShipSprite2 from './GameAssets/Sprite2.js';

let vertical;
let horizontal;
export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalMove1: 0,
      horizontalMove1: 0,
      verticalMove2: 0,
      horizontalMove2: 0,
      currentHorizontal: 0,
      currentVertical: 0,
      playerTurn: 1,
      moveCount: 0,
      playerMove: 48,
      island1: [-502, 90, -453, 21],
      island2: [-4, 258, 65, 189],
    }
  }

  winPageNav(){
    if((vertical > this.state.island1[0]
        && vertical < this.state.island1[2]
        && horizontal < this.state.island1[1]
        && horizontal > this.state.island1[3])
        ||
        (vertical > this.state.island2[0]
        && vertical < this.state.island2[2]
        && horizontal < this.state.island2[1]
        && horizontal > this.state.island2[3])){
          this.props.navigation.navigate('EndingPage');
        }
  }

  turnAlternator = () => {
    if (this.state.playerTurn == 1) {
      horizontal = this.state.horizontalMove1;
      vertical = this.state.verticalMove1;
    } else if(this.state.playerTurn == 2) {
      horizontal = this.state.horizontalMove2;
      vertical = this.state.verticalMove2;
    }
  }

  turnCounter = () => {
    this.setState({moveCount: this.state.moveCount + 1})
    if(this.state.moveCount == 2 && this.state.playerTurn == 2) {
      this.setState({
        playerTurn: 1,
        moveCount: 0,
      });
    } else if(this.state.moveCount == 2 && this.state.playerTurn == 1) {
      this.setState({
        playerTurn: 2,
        moveCount: 0,
      });
    }
  }

  upPress = () => {
    this.turnCounter();
    this.turnAlternator();
    this.winPageNav();
    if (this.state.playerTurn == 1) {
      if (vertical > -576) {
      this.setState({
        verticalMove1: vertical - this.state.playerMove
      });
    } else {
      this.setState({
        verticalMove1: 96
      });
    }
    } else if(this.state.playerTurn == 2) {
      if(vertical > -576){
        this.setState({
          verticalMove2: vertical - this.state.playerMove
        });
      } else{
        this.setState({
          verticalMove2: 96
        });
      }
    }
  }

  downPress = () => {
    this.turnCounter();
    this.turnAlternator();
    this.winPageNav();
    if (this.state.playerTurn == 1) {
      if (vertical < 134) {
      this.setState({
        verticalMove1: vertical + this.state.playerMove
      });
      } else {
        this.setState({
          verticalMove1: -624
        });
      }
    } else if(this.state.playerTurn == 2) {
      if(vertical < 134){
        this.setState({
          verticalMove2: vertical + this.state.playerMove
      });
      } else{
        this.setState({
          verticalMove2: -624
        });
      }
    }
  }

  leftPress = () => {
    this.turnCounter();
    this.turnAlternator();
    this.winPageNav();
    if (this.state.playerTurn == 1) {
      if (horizontal > -24) {
      this.setState({
        horizontalMove1: horizontal - this.state.playerMove
      });
    } else {
      this.setState({
        horizontalMove1: 336
      });
    }
  } else if(this.state.playerTurn == 2) {
    if(horizontal > -24){
      this.setState({
        horizontalMove2: horizontal - this.state.playerMove
      });
    } else{
      this.setState({
        horizontalMove2: 336
      });
    }
  }
}

    rightPress = () => {
      this.turnCounter();
      this.turnAlternator();
      this.winPageNav();
      if (this.state.playerTurn == 1) {
        if (horizontal < 336) {
        this.setState({
          horizontalMove1: horizontal + this.state.playerMove
        });
      } else {
        this.setState({
          horizontalMove1: -24
        });
      }
    } else if(this.state.playerTurn == 2) {
      if(horizontal < 336){
        this.setState({
          horizontalMove2: horizontal + this.state.playerMove
        });
      } else{
        this.setState({
          horizontalMove2: -24
        });
      }
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
              upArrow={this.state.verticalMove1}
              leftArrow={this.state.horizontalMove1}
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
