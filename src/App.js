import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterDisplay from "./component/CounterDisplay";
import CounterPanel from "./component/CounterPanel";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <CounterDisplay counter={props.ctr} />
      <CounterPanel label="increase" changed={props.incrementCounter} />
      <CounterPanel label="decrease" changed={props.decreaseCounter} />
      <CounterPanel
        label="increase value"
        changed={props.incrementCounterByValue}
        input={true}
        changedInput={props.changeInput}
        inputState={props.input}
      />
      <CounterPanel
        label="decrease value"
        changed={props.decreaseCounterByValue}
        input={true}
        changedInput={props.changeInput}
        inputState={props.input}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    input: state.input,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => {
      dispatch({ type: "incrementCounter" });
    },
    decreaseCounter: () => {
      dispatch({ type: "decreaseCounter" });
    },
    incrementCounterByValue: (value) => {
      dispatch({ type: "incrementCounterByValue", value: value });
    },
    changeInput: (value) => {
      dispatch({ type: "changeInput", value });
    },
    decreaseCounterByValue: (value) => {
      dispatch({ type: "decreaseCounterByValue", value });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
