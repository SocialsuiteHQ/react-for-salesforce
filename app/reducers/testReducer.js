import * as types from '~/actions/types';
import createReducer from '../lib/createReducer';


const defaultState = {
    message: 'test',
};

export const test = createReducer(defaultState, {
    [types.TEST_ACTION](state, action) {
        return { ...state, message: action.message };
    }
});
