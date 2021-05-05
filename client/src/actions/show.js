import * as api from "../api";
import { SHOW } from "../constants/actionTypes";

export const show = () => async (dispatch) => {
    try {
        // login the user
      const { data } = await api.showHomePage();
      dispatch({ type: SHOW, payload: data });
      
    } catch (error) {
        console.log("Error", error.message);
    }
  };