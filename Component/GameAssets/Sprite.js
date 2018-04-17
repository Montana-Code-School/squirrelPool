import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Matter from 'matter-js';
import { Sprite, Body, Loop } from 'react-game-kit/native';
import RedShip1 from '../Assets/Images/Sprites/RedShip1.png';

export default class ShipSprite extends Component {
  static propTypes = {
    keys: PropTypes.object,
    store: PropTypes.object,
  };

  static contextTypes = {
    engine: PropTypes.object,
    scale: PropTypes.number,
  };

  constructor(props){
    super(props);
    this.loopID = null;
    this.lastX = 0;
    this.state = {
      characterState: 0,
      loop: false,
      characterPosition: {x: 0, y: 0}
    };

    this.handlePlayStateChanged = this.handlePlayStateChanged.bind(this);
    this.checkKeys = this.checkKeys.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(){
  }

  componentWillUnmount() {
  }

  getWrapperStyles() {
    const { scale } = this.context;
    const style = this.state.characterPosition.y;
    return {
      position: 'absolute',
      transform: `translate({this.state.characterPosition.x * scale}px, {this.state.characterPosition.y * scale}px)`,
      transformOrigin: 'left top',
    };
  }

  render() {
    const upDown = -100;
    const leftRight = 60;
    return (
      <View>
        <Sprite
          style = {{top: upDown, left: leftRight}}
          repeat={false}
          src={require('../Assets/Images/Sprites/RedShipSolo1.png')}
          scale={this.context.scale * 1}
          state={0}
          steps={[0]}
          tileHeight={200}
          tileWidth={200}
        />
      </View>
    );
  }

  handlePlayStateChanged(state) {
    this.setState({
      spritePlaying: state ? true : false,
    });
  };

  move(body, x) {
    Matter.Body.setVelocity(body, { x, y: 0});
  };

  checkKeys(shouldMoveStageLeft, shouldMoveStageRight) {
    const { keys, store } = this.props;
    const { body } = this.body;

    let characterState = 0;

    if(keys.isDown(keys.LEFT)) {
      if(shouldMoveStageLeft) {
        store.setStageX(store.stageX + 5);
      }

      this.move(body, -5);
      characterState = 0;
    } else if(keys.isDown(keys.RIGHT)) {
      if(shouldMoveStageRight) {
        store.setStageX(store.stageX - 5);
      }

      this.move(body, 5);
      characterState = 0;
    }

    this.setState({
      characterState,
      repeat: characterState < 2,
    });
  };

  update() {
    const { store } = this.props;
    const { body } = this.body;

    const midPoint = math.abs(store.stageX) + 250;

    const shouldMoveStageLeft = body.position.x < midPoint && store.stageX < 0;
    const shouldMoveStageRight = body.position.x > midPoint && store.stageX > -576;

    this.lastX = body.position.x;
  };
}//end of class
