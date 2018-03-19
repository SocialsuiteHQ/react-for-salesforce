/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import ContactSearch from '~/js/components/ContactSearch';
import { dataService } from '../__mocks__/mock.js';

storiesOf('Contact Search', module)
    .addDecorator(withKnobs)
    .add('with text', () => {
        return (
            <ContactSearch service={dataService} />
        );
    });
