export default class FunctionHelpers {
  this.whirlPoolNav = whirlPoolNav(){
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
}
