const redux = require("redux");

const initialState = {
  counter: 0,
};

//Reducer
const rootReducer = (state = initialState, actions) => {
  if (actions.type === "INCRESE_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (actions.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + actions.value,
    };
  }
  return state;
};

//store

const store = redux.createStore(rootReducer);
console.log(store.getState());

//subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

//Action

store.dispatch({ type: "INCRESE_COUNTER" });
console.log(store.getState());

store.dispatch({ type: "ADD_COUNTER", value: 5 });
console.log(store.getState());
