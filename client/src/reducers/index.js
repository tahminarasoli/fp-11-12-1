import { combineReducers } from "redux";

import { showHome } from "./home";
import auth from './auth';

export default combineReducers({
  showHome, auth
});
