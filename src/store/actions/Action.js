// actions.js
import { NAV_TOGGLE } from '../types';



export const toggleNav = (navbar) => async (dispatch) => {
    dispatch({
      type: NAV_TOGGLE,
      payload: navbar,
    });
  };
  
