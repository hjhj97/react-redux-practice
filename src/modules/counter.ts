const ADD = "counter/ADD";
const SET_STEP = "counter/SET_STEP";

export const addCounter = () => ({ type: ADD });
export const setStep = (step) => ({ type: SET_STEP, step });

const initialState = {
  count: 0,
  step: 1,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + state.step };
    case SET_STEP:
      return { ...state, step: action.step };
    default:
      return state;
  }
};

export default counterReducer;
