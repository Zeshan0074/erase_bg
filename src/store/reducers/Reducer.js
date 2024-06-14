// reducer.js
import { NAV_TOGGLE } from '../types';

const initialState = {
  navbar: false // Initial state of navbar
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAV_TOGGLE:
      return {
        ...state,
        navbar: action.payload // Update navbar state with the value received from action
      };
    default:
      return state
  }
};

export default reducer;
