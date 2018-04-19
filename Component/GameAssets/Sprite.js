import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Matter, { Engine, Events } from 'matter-js';
import { Sprite, Body, Loop } from 'react-game-kit/native';
import RedShip1 from '../Assets/Images/Sprites/RedShip1.png';

export default class ShipSprite extends Component {

  constructor(props){
    super(props);
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
          src={require('../Assets/Images/Sprites/BigBoatRO.png')}
          scale={.5}
          state={0}
          steps={[0]}
          tileHeight={100}
          tileWidth={100}
        />
      </View>
    );
  }
}//end of class
