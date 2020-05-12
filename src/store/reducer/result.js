import * as actionTypes from "../action";

const initialState = {
  result: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
