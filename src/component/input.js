import React from "react";

const Input = props => {
  return (
    <div>
      <input
        type="text"
        value={props.inputValue}
        onChange={e => props.talkInput(e)}
      ></input>
      <button onClick={props.alertInput}>말해라 인풋값을</button>
    </div>
  );
};

export default Input;
