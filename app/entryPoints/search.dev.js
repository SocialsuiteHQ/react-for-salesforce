import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ContactSearch from '~/containers/ContactSearch';
import DevTools from '~/components/DevTools';
import initStore from '~/config/reduxSetup';

const store = initStore();

export const init = (el, service) => {
    render((
        <Provider store={store}>
            <div>
                <ContactSearch service={service} />
                <DevTools />
            </div>
        </Provider>
    ), el);
};
