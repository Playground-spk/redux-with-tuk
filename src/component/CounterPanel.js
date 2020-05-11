import React, { useState } from "react";

function CounterPanel(props) {
  const [inputValue, setInput] = useState("");
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <button
        onClick={
          props.input
            ? () => {
                props.changed(inputValue);
                setInput("");
              }
            : props.changed
        }
      >
        {props.label}
      </button>
      {props.input ? (
        <input onChange={changeInput} value={inputValue}></input>
      ) : null}
    </div>
  );
}

export default CounterPanel;
