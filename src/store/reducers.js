import logcase from './LoggedReducer';
import typecase from './UserTypeReducer';
import {combineReducers} from 'redux'
const reducers = combineReducers({
    logcase: logcase,
    typecase: typecase,
});
export default reducers;