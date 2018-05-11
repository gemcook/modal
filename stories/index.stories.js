/* @flow */
import React from 'react';
import {Button} from 'semantic-ui-react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';
import {withState} from '@dump247/storybook-state';
import {Modal} from '../src';
import {ALotOfModalBody} from './ALotOfModalBody';
import {ModalBody} from './ModalBody';
import '../src/styles/index.scss';

storiesOf('Modal', module)
  .add(
    'default',
    withState({isModal: false})(
      withInfo('default')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}>
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              ModalBody={ModalBody}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'the size of xs',
    withState({isModal: false})(
      withInfo('the size of xs')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}>
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              ModalBody={ModalBody}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              size="xs"
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'the size of sm',
    withState({isModal: false})(
      withInfo('the size of sm')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}>
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              ModalBody={ModalBody}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              size="sm"
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'the size of md',
    withState({isModal: false})(
      withInfo('the size of md')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}>
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              ModalBody={ModalBody}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              size="md"
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'the size of lg',
    withState({isModal: false})(
      withInfo('the size of lg')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}>
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              ModalBody={ModalBody}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              size="lg"
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'the size of xl',
    withState({isModal: false})(
      withInfo('the size of xl')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}>
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              ModalBody={ModalBody}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              size="xl"
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'the size of full',
    withState({isModal: false})(
      withInfo('the size of full')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}>
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              ModalBody={() => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <ModalBody />
                  </div>
                );
              }}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              size="full"
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'lots of characters',
    withState({isModal: false})(
      withInfo('lots of characters')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}>
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              ModalBody={ALotOfModalBody}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
            />
          </div>
        );
      }),
    ),
  );
