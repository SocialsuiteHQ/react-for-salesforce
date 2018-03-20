import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ContactSearch from '~/js/containers/ContactSearch';
import DevTools from '~/js/components/DevTools';
import initStore from '~/config/reduxSetup';

const store = initStore();

export const initSearch = (el, service) => {
    render((
        <Provider store={store}>
            <div>
                <ContactSearch service={service} />
                <DevTools />
            </div>
        </Provider>
    ), el);
};
