const initialState = {
  counter: 0,
  input: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "incrementCounter") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "decreaseCounter") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "changeInput") {
    return {
      ...state,
      input: action.value,
    };
  }

  if (action.type === "incrementCounterByValue") {
    return {
      ...state,
      counter: state.counter + Number(action.value),
      input: "",
    };
  }
  if (action.type === "decreaseCounterByValue") {
    return {
      ...state,
      counter: state.counter - Number(action.value),
      input: "",
    };
  }
  return state;
};

export default reducer;
