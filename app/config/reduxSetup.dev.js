/* eslint import/no-extraneous-dependencies: 0 */
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import reducer from '~/reducers';
import DevTools from '~/components/DevTools';

const enhancer = compose(
    applyMiddleware(logger),
    DevTools.instrument()
);

function configureStore() {
    return createStore(reducer, enhancer);
}

export default () => {
    const store = configureStore();
    return store;
};
