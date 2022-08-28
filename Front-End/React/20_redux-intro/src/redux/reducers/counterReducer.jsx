import { DECREMENT, INCREMENT, RESET } from "../types/counterTypes";

const initialState = {
  counter: 0,
};

//*Reducer herzaman bir state dondurmesi gerekiyor !break olmaz

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };

    case DECREMENT:
      return { counter: state.counter - 1 };

    case RESET:
      return { counter: 0 };

    default:
      return state;
  }
};

export default counterReducer;
