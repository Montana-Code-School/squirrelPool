import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Alert, Image, StyleSheet, Text, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TileMap, Loop, Stage, World } from 'react-game-kit/native';
import { AudioPlayer } from 'react-game-kit';
import WaterTileMap from './GameAssets/WaterTileMap.js';
import ShipSprite from './GameAssets/Sprite.js';
import ShipSprite2 from './GameAssets/Sprite2.js';
import { Audio } from 'expo';


let vertical;
let horizontal;
export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalMove1: 48,
      horizontalMove1: 0,
      verticalMove2: -48,
      horizontalMove2: 288,
      playerTurn: 1,
      moveCount: 0,
      playerMove: 48,
      island1: [-436, 228, -389, 159],
      whirlpool1: [-502, 90, -453, 21], //top left
      whirlpool2: [-292, 156, -245, 81],//middle
      whirlpool3: [-196, 325, -149, 250], //bottom right
      soundObject: new Audio.Sound(),
    }
  }

  componentDidMount(){
    this.playSound();
  }


  componentWillUnmount(){
  }

  playSound = async () => {
      try {
        await this.state.soundObject.loadAsync(require('./Assets/Audio/DrunkenSailor.mp3'));
        this.state.soundObject.playAsync();
        this.state.soundObject.setPositionAsync(0);
        this.state.soundObject.setRateAsync(1, false);
        this.state.soundObject.setIsLoopingAsync(1)
      } catch (error) {
        console.error(error)
      }
  }

  whirlPoolNav(){
      if(this.state.playerTurn == 1) {
        if((vertical > this.state.whirlpool1[0]
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
      } else if(this.state.playerTurn == 2) {
        if((vertical > (this.state.whirlpool1[0] - 100)
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

  winPageNav(){
      if(this.state.playerTurn == 1) {
        if(vertical > this.state.island1[0]
          && vertical < this.state.island1[2]
          && horizontal < this.state.island1[1]
          && horizontal > this.state.island1[3])
        {
        this.state.soundObject.stopAsync();
        this.props.navigation.navigate('EndingPage');
        }
      } else if(this.state.playerTurn == 2) {
        if(vertical > (this.state.island1[0] - 100)
          && vertical < (this.state.island1[2] - 100)
          && horizontal < this.state.island1[1]
          && horizontal > this.state.island1[3])
        {
        this.state.soundObject.stopAsync();
        this.props.navigation.navigate('EndingPage2');
        }
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
    } else if(this.state.playerTurn == 2) {
      if(vertical > -626){
        this.setState({
          verticalMove2: vertical - this.state.playerMove
        });
        console.log(this.state.verticalMove2)
      } else{
        this.setState({
          verticalMove2: 34
        });
      }
    }
     this.winPageNav();
     this.whirlPoolNav();
  }

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
    } else if(this.state.playerTurn == 2) {
      if(vertical < 34){
        this.setState({
          verticalMove2: vertical + this.state.playerMove
      });
      } else{
        this.setState({
          verticalMove2: -676
        });
      }
    }
     this.winPageNav();
     this.whirlPoolNav();
  }

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
   this.whirlPoolNav();
   this.winPageNav();
}

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
     this.winPageNav();
     this.whirlPoolNav();
  }
  arrowColor = () =>{
    if(this.state.playerTurn == 1){
      return require("./Assets/Images/ArrowRed.png")
    } else if(this.state.playerTurn == 2) {
      return require("./Assets/Images/ArrowGreen.png")
    }
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
