import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Alert, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TileMap, Loop, Stage, World } from 'react-game-kit/native';
import WaterTileMap from './GameAssets/WaterTileMap.js'
import ShipSprite from './GameAssets/Sprite.js';

export default class GamePage extends React.Component {
  constructor(props) {
  super(props);
  }


  render() {
    return(
      <Loop>
        <Stage width={576} height={1024}>
          <World>
            <WaterTileMap />
            <ShipSprite />
          </World>
        </Stage>
      </Loop>
    );
  }
}
