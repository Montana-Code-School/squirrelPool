import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Matter from 'matter-js';
import { Sprite, Body } from 'react-game-kit/native';
import RedShip1 from '../Assets/Images/Sprites/RedShip1.png';

@observer export default class ShipSprite extends Component {
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
    };

    this.handlePlayStateChanged = this.handlePlayStateChanged.bind(this);
    this.checkKeys = this.checkKeys.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    Matter.Events.on(this.update, this.context.engine, "afterUpdate");
  }

  componentWillUnmount() {
    Matter.Events.off(this.context.engine, this.update, "afterUpdate");
  }

  getWrapperStyles() {
    const { characterPosition, stageX } = this.props.store;
    const { scale } = this.context;
    const { x, y } = characterPosition;
    const targetX = x + stageX;

    return {
      position: 'absolute',
      transform: `translate(${targetX * scale}px, ${y * scale}px)`,
      transformOrigin: 'left top',
    };
  }

  render() {
    console.log("Anybody there??")
    console.log(this.props);
    const x = this.props.store.characterPosition.x;

    return (
      <div style = {this.getWrapperStyles()}>
        <Body args={[x, 384, 64, 64]} ref={b => {this.body = b;}}>
          <Sprite
            repeat={false}
            src={require('../Assets/Images/Sprites/RedShip1.png')}
            scale={this.context.scale * 1}
            state={0}
            steps={[1]}
            tileHeight={200}
            tileWidth={200}
          />
        </Body>
      </div>
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
