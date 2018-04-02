import { combineReducers } from 'redux';
import userReducer from './user-reducer';

const allReducers = {
    user: userReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;
