import * as api from "../api";
// import { CREATE, UPDATE, DELETE, FETCH_ALL} from "../constants/actionTypes";
import ACTIONS from '../constants/actionTypes'

//Action Creators
export const getHelps = (token) => async (dispatch) => {
  try {
    const { data } = await api.fetchHelps(token);
    // console.log(data)
    // const action = { type: "FETCH_ALL", payload: [] };
    // dispatch(action);

    dispatch({ type: ACTIONS.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createHelp = (help, token) => async (dispatch) => {
  console.log(help)
  try {
    const { data } = await api.createHelp(help,token);
    dispatch({ type: ACTIONS.CREATE, payload: data });
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};

export const updateHelp = (id, help,token) => async (dispatch) => {
  console.log(id,help)
  try {
    const { data } = await api.updateHelp(id, help,token);
    dispatch({ type: ACTIONS.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteHelp = (id,token) => async (dispatch) => {
  try {
    await api.deleteHelp(id,token);
    dispatch({ type: ACTIONS.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

