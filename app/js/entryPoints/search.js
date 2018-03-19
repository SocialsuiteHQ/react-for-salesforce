import React from 'react';
import { render } from 'react-dom';
import ContactSearch from '~/js/components/ContactSearch';

export const initSearch = (el, service) => {
    render((
        <ContactSearch service={service} />
    ), el);
};
