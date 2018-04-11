/* @flow */
import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';

import {Welcome} from '@storybook/react/demo';

import {Modal} from '../src';

import '../lib/base.css';
import '../src/styles/index.scss';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Modal', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .add('no data', () => <Modal />)
  .add('with props', () => <Modal isModal ModalBody={Welcome} />);
