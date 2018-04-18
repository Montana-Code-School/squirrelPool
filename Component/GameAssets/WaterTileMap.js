import React from 'react';
import { TileMap, Loop, Sprite } from 'react-game-kit/native';

export default class WaterTileMap extends React.Component {

  render() {
  return (
    <Loop>
      <TileMap
        style = {{}}
        src = {require('../Assets/Images/Tiles/NNBWATERSQUARE2.png')}
        sourceWidth = {100}
        tileSize = {32}
        columns = {18}
        rows = {32}
        layers = {[
          [
            1,
          ],
        ]}
      />
      <TileMap
        style = {{}}
        src = {require('../Assets/Images/Tiles/NNBLANDSQUARE3.png')}
        sourceWidth = {100}
        tileSize = {96}
        columns = {6}
        rows = {10}
        layers = {[
          [
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
          ],
        ]}
      />
      <TileMap
        style = {{}}
        src = {require('../Assets/Images/Tiles/NNBWATERSQUARE3.png')}
        sourceWidth = {100}
        tileSize = {96}
        columns = {6}
        rows = {10}
        layers = {[
          [
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
          ],
        ]}
      />
    </Loop>
    )
  }
}
