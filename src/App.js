import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterDisplay from "./component/CounterDisplay";
import CounterPanel from "./component/CounterPanel";
import { connect } from "react-redux";
import * as actionTypes from "./store/action";

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
      <button
        onClick={() => {
          props.keepResult(props.ctr);
        }}
      >
        keep Result
      </button>
      <ul>
        {props.results.map((result) => {
          return (
            <li onClick={() => props.deleteResult(result.id)}>
              {result.counter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    results: state.rs.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => {
      dispatch({ type: actionTypes.incrementCounter });
    },
    decreaseCounter: () => {
      dispatch({ type: actionTypes.decreaseCounter });
    },
    incrementCounterByValue: (value) => {
      dispatch({ type: actionTypes.incrementCounterByValue, value: value });
    },

    decreaseCounterByValue: (value) => {
      dispatch({ type: actionTypes.decreaseCounterByValue, value });
    },
    keepResult: (value) => {
      dispatch({ type: actionTypes.keepResult, counter: value });
    },
    deleteResult: (id) => {
      dispatch({ type: actionTypes.deleteResult, id });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
