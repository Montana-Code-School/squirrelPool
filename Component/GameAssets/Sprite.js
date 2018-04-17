import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Matter from 'matter-js';
import { Sprite, Body, Loop } from 'react-game-kit/native';
import RedShip1 from '../Assets/Images/Sprites/RedShip1.png';

export default class ShipSprite extends Component {

  constructor(props){
    super(props);
    this.loopID = null;
    this.lastX = 0;
    this.state = {
      characterState: 0,
      loop: false,
      characterPosition: {x: 0, y: 0}
    };
  }

  componentDidMount(){
  }

  componentWillUnmount() {
  }


  render() {
    const upDown = this.props.upArrow;
    const leftRight = this.props.leftArrow;
    return (
      <View>
        <Sprite
          style = {{top: upDown, left: leftRight}}
          repeat={false}
          src={require('../Assets/Images/Sprites/BigBoatGB.png')}
          scale={.50}
          state={0}
          steps={[0]}
          tileHeight={200}
          tileWidth={200}
        />
      </View>
    );
  }
}//end of class
