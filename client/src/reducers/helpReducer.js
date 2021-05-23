// import { CREATE, UPDATE, DELETE, FETCH_ALL} from "../constants/actionTypes";
import ACTIONS from '../constants/actionTypes'

const help = (help = [], action) => {
  switch (action.type) {
    
    case ACTIONS.FETCH_ONE:
      return action.payload;

    
    default:
      return help;
  }
};

export default help;
