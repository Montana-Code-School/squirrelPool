import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Alert, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TileMap, Loop, Stage, World } from 'react-game-kit/native';
import WaterTileMap from './GameAssets/WaterTileMap.js'
import ShipSprite from './GameAssets/Sprite.js';
import GameStore from './GameAssets/GameStore.js';

export default class GamePage extends React.Component {
  constructor(props) {
  super(props);
  }


  render() {
    console.log({GameStore});
    return(
      <Loop>
        <Stage width={576} height={1024}>
          <WaterTileMap />
          <ShipSprite store={GameStore}/>
        </Stage>
      </Loop>
    );
  }
}
