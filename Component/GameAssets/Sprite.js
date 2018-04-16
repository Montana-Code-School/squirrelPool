import React from 'react';
import { Sprite } from 'react-game-kit/native';

export default class ShipSprite extends React.Component {

  render() {
    return (
      <Sprite
        repeat={false}
        src={require('../Assets/Images/Sprites/ShipSquare.png')}
        scale={this.context.scale * 1}
        state={0}
        steps={[1]}
        tileHeight={200}
        tileWidth={200}
      />
    )
  }
}
