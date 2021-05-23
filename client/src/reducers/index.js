import { combineReducers } from 'redux';  
import auth from './authReducer';
import token from './tokenReducer';
import users from './usersReducer';
import helps from './helpsReducer';
import help from './helpReducer';


export default combineReducers({
    auth,
    token,
    users,
    helps,
    help
})