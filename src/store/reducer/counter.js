import * as actionTypes from "../action";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.incrementCounter:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case actionTypes.decreaseCounter:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case actionTypes.incrementCounterByValue:
      return {
        ...state,
        counter: state.counter + Number(action.value),
      };

    case actionTypes.decreaseCounterByValue:
      return {
        ...state,
        counter: state.counter - Number(action.value),
      };
  }
  return state;
};

export default reducer;
