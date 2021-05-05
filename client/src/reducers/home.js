import { SHOW } from "../constants/actionTypes";

export const showHome = (state = [], action) => {
  switch (action.type) {
    case SHOW:
      
      return action?.payload ;
    default:
      return state;
  }
};

