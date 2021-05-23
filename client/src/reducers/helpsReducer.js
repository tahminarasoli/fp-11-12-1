// import { CREATE, UPDATE, DELETE, FETCH_ALL} from "../constants/actionTypes";
import ACTIONS from '../constants/actionTypes'

const helps = (helps = [], action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ALL:
      return action.payload;

    case ACTIONS.CREATE:
      return [...helps, action.payload];

    case ACTIONS.UPDATE:
      return helps.map((help) =>
        help._id === action.payload._id ? action.payload : help
      );

    case ACTIONS.DELETE:
      return helps.filter((help) => help._id !== action.payload);

    default:
      return helps;
  }
};

export default helps;
