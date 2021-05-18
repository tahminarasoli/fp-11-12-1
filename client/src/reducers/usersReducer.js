import ACTIONS from "../constants/actionTypes";

const users= [];

const usersReducer = (state = users, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_USERS:
            return action.payload

        default:
            return state;
    }
};

export default usersReducer;
