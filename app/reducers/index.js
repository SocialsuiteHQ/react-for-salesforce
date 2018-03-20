import { combineReducers } from 'redux';
import * as testReducer from './testReducer';

export default combineReducers(Object.assign(
    testReducer
));
