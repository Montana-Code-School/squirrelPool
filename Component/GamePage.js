import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Alert, Image, StyleSheet, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TileMap, Loop, Stage, World } from 'react-game-kit/native';
import WaterTileMap from './GameAssets/WaterTileMap.js';
import ShipSprite from './GameAssets/Sprite.js';
import ShipSprite2 from './GameAssets/Sprite2.js';
import { Audio } from 'expo';

// global variables used for ship positioning
let vertical;
let horizontal;

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalMove1: 48, // red ship vertical
      horizontalMove1: 0, // red ship horizontal
      verticalMove2: -48, // green ship vertical
      horizontalMove2: 288, // green ship horizontal
      playerTurn: 1, // which players turn (1 = red ship, 2 = green ship)
      moveCount: 0, // counts the number of times a ship has moved before changing turns
      playerMove: 48, // the distance a ship moves with each button press
      island1: [-436, 228, -389, 159], // island coordinates
      whirlpool1: [-502, 90, -453, 21], // top left
      whirlpool2: [-292, 156, -245, 81], // middle
      whirlpool3: [-196, 325, -149, 250], // bottom right
      soundObject: new Audio.Sound(), // music
    }
  }

  // loads music on game start
  componentDidMount(){
    this.playSound();
  }

  // changes the arrow color depending on the player turn
  arrowColor = () =>{
    if (this.state.playerTurn == 1){
      return require("./Assets/Images/ArrowRed.png")
    } else if (this.state.playerTurn == 2) {
      return require("./Assets/Images/ArrowGreen.png")
    }
  }

  // plays audio file on game start
  playSound = async () => {
    try {
      await this.state.soundObject.loadAsync(require('./Assets/Audio/DKM.mp3'));
      this.state.soundObject.playAsync();
      this.state.soundObject.setPositionAsync(0);
      this.state.soundObject.setRateAsync(1.3, false);
      this.state.soundObject.setIsLoopingAsync(1)
    } catch (error) {
      console.error(error)
    }
  }

  // determines if a ship has hit a "squirrelpool", if so ends current turn
  whirlPoolNav(){
    if (this.state.playerTurn == 1) {
      if ((vertical > this.state.whirlpool1[0]
        && vertical < this.state.whirlpool1[2]
        && horizontal < this.state.whirlpool1[1]
        && horizontal > this.state.whirlpool1[3])
        ||
        (vertical > this.state.whirlpool2[0]
        && vertical < this.state.whirlpool2[2]
        && horizontal < this.state.whirlpool2[1]
        && horizontal > this.state.whirlpool2[3])
        ||
        (vertical > this.state.whirlpool3[0]
        && vertical < this.state.whirlpool3[2]
        && horizontal < this.state.whirlpool3[1]
        && horizontal > this.state.whirlpool3[3]))
      {
        this.setState({
          playerTurn: 2,
          turnCounter: 0
        });
        Alert.alert(
          "YARR!",
          "Yee hit a whirlpool and lost a turn, Squirrely-wag!",
          {cancelable: false}
        )
      }
    } else if (this.state.playerTurn == 2) {
      if ((vertical > (this.state.whirlpool1[0] - 100)
      && vertical < (this.state.whirlpool1[2] - 100)
      && horizontal < this.state.whirlpool1[1]
      && horizontal > this.state.whirlpool1[3])
      ||
      (vertical > this.state.whirlpool2[0] - 100
      && vertical < this.state.whirlpool2[2] -100
      && horizontal < this.state.whirlpool2[1]
      && horizontal > this.state.whirlpool2[3])
      ||
      (vertical > (this.state.whirlpool3[0] - 100)
      && vertical < (this.state.whirlpool3[2] - 100)
      && horizontal < this.state.whirlpool3[1]
      && horizontal > this.state.whirlpool3[3]))
      {
        this.setState({
          playerTurn: 1,
          turnCounter: 0
        });
        Alert.alert(
          "YARR!",
          "Yee hit a whirlpool and lost a turn, Squirrely-wag!",
          {cancelable: false}
        )
      }
    }
  }

  // determines if a ship has acquired the treasure, if so navigates to the
  // corresponding win page
  winPageNav(){
    if (this.state.playerTurn == 1) {
      if (vertical > this.state.island1[0]
      && vertical < this.state.island1[2]
      && horizontal < this.state.island1[1]
      && horizontal > this.state.island1[3])
      {
        this.state.soundObject.stopAsync();
        this.props.navigation.navigate('EndingPage');
      }
    } else if (this.state.playerTurn == 2) {
      if (vertical > (this.state.island1[0] - 100)
      && vertical < (this.state.island1[2] - 100)
      && horizontal < this.state.island1[1]
      && horizontal > this.state.island1[3])
      {
        this.state.soundObject.stopAsync();
        this.props.navigation.navigate('EndingPage2');
      }
    }
  }

  // sets global variable to equal the state of the current ships map coordinates
  turnAlternator = () => {
    if (this.state.playerTurn == 1) {
      horizontal = this.state.horizontalMove1;
      vertical = this.state.verticalMove1;
    } else if (this.state.playerTurn == 2) {
      horizontal = this.state.horizontalMove2;
      vertical = this.state.verticalMove2;
    }
  }

  // counts the number of times a button has been pressed per turn, and alternates
  // the turn at the third press.
  turnCounter = () => {
    this.setState({moveCount: this.state.moveCount + 1});
    if (this.state.moveCount == 2 && this.state.playerTurn == 2) {
      this.setState({
        playerTurn: 1,
        moveCount: 0,
      });
    } else if (this.state.moveCount == 2 && this.state.playerTurn == 1) {
      this.setState({
        playerTurn: 2,
        moveCount: 0,
      });
    }
  }

  // Up Movement button
  upPress = () => {
    this.turnCounter();
    this.turnAlternator();
    if (this.state.playerTurn == 1) {
      if (vertical > -576) {
        this.setState({
          verticalMove1: vertical - this.state.playerMove
        });
      } else {
        this.setState({
          verticalMove1: 134
        });
      }
    } else if (this.state.playerTurn == 2) {
      if (vertical > -626){
        this.setState({
          verticalMove2: vertical - this.state.playerMove
        });
        console.log(this.state.verticalMove2)
      } else {
        this.setState({
          verticalMove2: 34
        });
      }
    }
    this.winPageNav();
    this.whirlPoolNav();
  }

  // Down movement button
  downPress = () => {
    this.turnCounter();
    this.turnAlternator();
    if (this.state.playerTurn == 1) {
      if (vertical < 134) {
        this.setState({
          verticalMove1: vertical + this.state.playerMove
        });
      } else {
        this.setState({
          verticalMove1: -576
        });
      }
    } else if (this.state.playerTurn == 2) {
      if (vertical < 34){
        this.setState({
          verticalMove2: vertical + this.state.playerMove
        });
      } else {
        this.setState({
          verticalMove2: -676
        });
      }
    }
    this.winPageNav();
    this.whirlPoolNav();
  }

  // Left movement button
  leftPress = () => {
    this.turnCounter();
    this.turnAlternator();
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
    } else if (this.state.playerTurn == 2) {
      if (horizontal > -24){
        this.setState({
          horizontalMove2: horizontal - this.state.playerMove
        });
      } else {
        this.setState({
          horizontalMove2: 336
        });
      }
    }
    this.winPageNav();
    this.whirlPoolNav();
  }

  // Right movement button
  rightPress = () => {
    this.turnCounter();
    this.turnAlternator();
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
    } else if (this.state.playerTurn == 2) {
      if (horizontal < 336){
        this.setState({
          horizontalMove2: horizontal + this.state.playerMove
        });
      } else {
        this.setState({
          horizontalMove2: -24
        });
      }
    }
    this.winPageNav();
    this.whirlPoolNav();
  }

  // Renders movement buttons and ships to the page
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
              source={this.arrowColor()}
              style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={{top: 300, left: 182, zIndex: 10, width: 50, height:50}}
            onPress= {this.downPress}>
              <Image
              source={this.arrowColor()}
              style={{width: 50, height: 50, transform: [{rotate: "180deg"}]}}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={{top: 212, left: 230, zIndex: 10, width: 50, height:50}}
            onPress= {this.rightPress}>
              <Image
              source={this.arrowColor()}
              style={{width: 50, height: 50, transform: [{rotate: "90deg"}]}}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={{top: 162, left: 135, zIndex: 10, width: 50, height:50}}
            onPress= {this.leftPress}>
              <Image
              source={this.arrowColor()}
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
