/* @flow */
import React from 'react';
import {Button} from 'semantic-ui-react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';
import {Welcome} from '@storybook/react/demo';
import {withState} from '@dump247/storybook-state';
import {Modal} from '../src';
import {ALotOfWelcome} from './ALotOfWelcome';
import '../lib/base.css';
import '../src/styles/index.scss';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Modal', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .add(
    'default',
    withState({isModal: false})(({store}) => {
      return (
        <React.Fragment>
          <Button
            color="pink"
            onClick={() => store.set({isModal: !store.state.isModal})}>
            Open Modal
          </Button>
          <Modal
            isModal={store.state.isModal}
            ModalBody={Welcome}
            handleCloseModal={() => store.set({isModal: !store.state.isModal})}
          />
        </React.Fragment>
      );
    }),
  )
  .add(
    'the size of xs',
    withState({isModal: false})(({store}) => {
      return (
        <React.Fragment>
          <Button
            color="pink"
            onClick={() => store.set({isModal: !store.state.isModal})}>
            Open Modal
          </Button>
          <Modal
            isModal={store.state.isModal}
            ModalBody={Welcome}
            handleCloseModal={() => store.set({isModal: !store.state.isModal})}
            size="xs"
          />
        </React.Fragment>
      );
    }),
  )
  .add(
    'the size of sm',
    withState({isModal: false})(({store}) => {
      return (
        <React.Fragment>
          <Button
            color="pink"
            onClick={() => store.set({isModal: !store.state.isModal})}>
            Open Modal
          </Button>
          <Modal
            isModal={store.state.isModal}
            ModalBody={Welcome}
            handleCloseModal={() => store.set({isModal: !store.state.isModal})}
            size="sm"
          />
        </React.Fragment>
      );
    }),
  )
  .add(
    'the size of md',
    withState({isModal: false})(({store}) => {
      return (
        <React.Fragment>
          <Button
            color="pink"
            onClick={() => store.set({isModal: !store.state.isModal})}>
            Open Modal
          </Button>
          <Modal
            isModal={store.state.isModal}
            ModalBody={Welcome}
            handleCloseModal={() => store.set({isModal: !store.state.isModal})}
            size="md"
          />
        </React.Fragment>
      );
    }),
  )
  .add(
    'the size of lg',
    withState({isModal: false})(({store}) => {
      return (
        <React.Fragment>
          <Button
            color="pink"
            onClick={() => store.set({isModal: !store.state.isModal})}>
            Open Modal
          </Button>
          <Modal
            isModal={store.state.isModal}
            ModalBody={Welcome}
            handleCloseModal={() => store.set({isModal: !store.state.isModal})}
            size="lg"
          />
        </React.Fragment>
      );
    }),
  )
  .add(
    'the size of xl',
    withState({isModal: false})(({store}) => {
      return (
        <React.Fragment>
          <Button
            color="pink"
            onClick={() => store.set({isModal: !store.state.isModal})}>
            Open Modal
          </Button>
          <Modal
            isModal={store.state.isModal}
            ModalBody={Welcome}
            handleCloseModal={() => store.set({isModal: !store.state.isModal})}
            size="xl"
          />
        </React.Fragment>
      );
    }),
  )
  .add(
    'lots of characters',
    withState({isModal: false})(({store}) => {
      return (
        <React.Fragment>
          <Button
            color="pink"
            onClick={() => store.set({isModal: !store.state.isModal})}>
            Open Modal
          </Button>
          <Modal
            isModal={store.state.isModal}
            ModalBody={ALotOfWelcome}
            handleCloseModal={() => store.set({isModal: !store.state.isModal})}
          />
        </React.Fragment>
      );
    }),
  );
