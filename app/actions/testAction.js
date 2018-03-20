// @flow
import * as types from './types';

export function testAction(message: string) {
    return {
        type: types.TEST_ACTION,
        message
    };
}
