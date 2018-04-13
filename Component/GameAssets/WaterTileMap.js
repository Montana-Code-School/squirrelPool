import React from 'react';
import { TileMap, Loop } from 'react-game-kit/native';

export default class WaterTileMap extends React.Component {

  render() {
  return (
    <Loop>
      <TileMap
        style = {{}}
        src = {require('../Images/NNBWATERSQUARE2.png')}
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
        src = {require('../Images/NNBLANDSQUARE3.png')}
        sourceWidth = {100}
        tileSize = {96}
        columns = {6}
        rows = {10}
        layers = {[
          [
            1,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,1,0,
            0,0,0,0,0,0,
            0,1,0,0,0,0,
            0,0,0,0,0,1,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,1,0,0,0,
            0,0,0,0,0,1,
          ],
        ]}
      />
      <TileMap
        style = {{}}
        src = {require('../Images/NNBWATERSQUARE3.png')}
        sourceWidth = {100}
        tileSize = {96}
        columns = {6}
        rows = {10}
        layers = {[
          [
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,0,1,0,0,
            0,0,0,0,0,0,
            0,0,0,0,0,0,
            0,0,1,0,0,0,
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
