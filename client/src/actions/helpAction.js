import * as api from "../api";
// import { CREATE, UPDATE, DELETE, FETCH_ALL} from "../constants/actionTypes";
import ACTIONS from '../constants/actionTypes'

//Action Creators

export const getHelp = (id,token) => async (dispatch) => {
  try {
    const { data } = await api.fetchHelp(id,token);
    
    dispatch({ type: ACTIONS.FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


