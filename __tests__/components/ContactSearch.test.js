/* eslint no-undef: 0 import/first: 0 */

import { dataService } from '../../__mocks__/mock.js'; // For some reason this needs to go at the top

import React from 'react';
import renderer from 'react-test-renderer';
import ContactSearch from '~/js/components/ContactSearch';


test('Button Display', () => {
    const component = renderer.create(
        <ContactSearch service={dataService} />
    );
    let button = component.toJSON();
    expect(button).toMatchSnapshot();
});
