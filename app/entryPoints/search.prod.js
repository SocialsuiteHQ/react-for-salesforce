import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ContactSearch from '~/containers/ContactSearch';
import initStore from '~/config/reduxSetup';

const store = initStore();

export const init = (el, service) => {
    render((
        <Provider store={store}>
            <ContactSearch service={service} />
        </Provider>
    ), el);
};
