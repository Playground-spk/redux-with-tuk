import * as actionTypes from "../store/action";

const initialState = {
  counter: 0,
  result: [],
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
        input: "",
      };

    case actionTypes.decreaseCounterByValue:
      return {
        ...state,
        counter: state.counter - Number(action.value),
        input: "",
      };

    case actionTypes.keepResult:
      return {
        ...state,
        result: state.result.concat({
          id: new Date(),
          counter: action.counter,
        }),
      };

    case actionTypes.deleteResult:
      return {
        ...state,
        result: state.result.filter((result) => result.id !== action.id),
      };
  }
  return state;
};

export default reducer;
