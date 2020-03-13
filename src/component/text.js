import React, { Component } from "react";
import Input from "./input";

class Text extends Component {
  state = {
    inputValue: ""
  };

  handleHi = () => {
    alert("안녕하세요다 인마");
  };

  talkInput = e => {
    let a = e.target.value;
    this.setState({ inputValue: a });
  };

  alertInput = () => {
    alert(this.state.inputValue + "다 인마");
  };

  render() {
    console.log("이스테이트 : ", this.state);
    return (
      <div>
        <button onClick={this.handleHi}>안녕하세요</button>
        <Input
          talkInput={this.talkInput}
          inputValue={this.state.inputValue}
          alertInput={this.alertInput}
        />
      </div>
    );
  }
}

export default Text;
