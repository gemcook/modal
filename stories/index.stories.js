/* @flow */
import * as React from 'react';
import {withState} from '@dump247/storybook-state';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import {Button} from 'semantic-ui-react';
import {Modal} from '../src';
import {ALotOfModalBody} from './ALotOfModalBody';
import {ModalBody} from './ModalBody';
// $ImportStyle
import '../src/styles/index.scss';

storiesOf('default', module)
  .add(
    'the size of xs',
    withState({isModal: false})(
      withInfo('the size of xs')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
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
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
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
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
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
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
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
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
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
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
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
                    }}
                  >
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
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
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

storiesOf('with actions', module)
  .add(
    'this size of xs',
    withState({isModal: false})(
      withInfo('easy props')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              title="アイテムを削除"
              resource={'アイテム'}
              actionMessage="を削除しますか？"
              isShowYesButton
              yesLabel="削除する"
              yesHandler={() => null}
              isShowNoButton
              noLabel="キャンセル"
              noHandler={() => {}}
              size="xs"
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'this size of sm',
    withState({isModal: false})(
      withInfo('easy props')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              title="アイテムを削除"
              resource={'アイテム'}
              actionMessage="を削除しますか？"
              isShowYesButton
              yesLabel="削除する"
              yesHandler={() => null}
              isShowNoButton
              noLabel="キャンセル"
              noHandler={() => {}}
              size="sm"
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'this size of md',
    withState({isModal: false})(
      withInfo('easy props')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              title="アイテムを削除"
              resource={'アイテム'}
              actionMessage="を削除しますか？"
              isShowYesButton
              yesLabel="削除する"
              yesHandler={() => null}
              isShowNoButton
              noLabel="キャンセル"
              noHandler={() => {}}
              size="md"
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'this size of lg',
    withState({isModal: false})(
      withInfo('easy props')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              title="アイテムを削除"
              resource={'アイテム'}
              actionMessage="を削除しますか？"
              isShowYesButton
              yesLabel="削除する"
              yesHandler={() => null}
              isShowNoButton
              noLabel="キャンセル"
              noHandler={() => {}}
              size="lg"
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'this size of xl',
    withState({isModal: false})(
      withInfo('easy props')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              title="アイテムを削除"
              resource={'アイテム'}
              actionMessage="を削除しますか？"
              isShowYesButton
              yesLabel="削除する"
              yesHandler={() => null}
              isShowNoButton
              noLabel="キャンセル"
              noHandler={() => {}}
              size="xl"
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'this size of full',
    withState({isModal: false})(
      withInfo('easy props')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              title="アイテムを削除"
              resource={'アイテム'}
              actionMessage="を削除しますか？"
              isShowYesButton
              yesLabel="削除する"
              yesHandler={() => null}
              isShowNoButton
              noLabel="キャンセル"
              noHandler={() => {}}
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
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              ModalBody={ALotOfModalBody}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              isShowYesButton
              yesLabel="削除する"
              yesHandler={() => null}
              isShowNoButton
              noLabel="キャンセル"
              noHandler={() => {}}
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'hide yes button',
    withState({isModal: false})(
      withInfo('easy props')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              title="アイテムを削除"
              resource={'アイテム'}
              actionMessage="を削除しますか？"
              isShowNoButton
              noLabel="キャンセル"
              noHandler={() => {}}
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'hide cancel button',
    withState({isModal: false})(
      withInfo('easy props')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              title="アイテムを削除"
              resource={'アイテム'}
              actionMessage="を削除しますか？"
              isShowYesButton
              yesLabel="削除する"
              yesHandler={() => null}
            />
          </div>
        );
      }),
    ),
  )
  .add(
    'actions styles',
    withState({isModal: false})(
      withInfo('easy props')(({store}) => {
        return (
          <div>
            <Button
              color="pink"
              onClick={() => store.set({isModal: !store.state.isModal})}
            >
              Open Modal
            </Button>
            <Modal
              isModal={store.state.isModal}
              handleCloseModal={() =>
                store.set({isModal: !store.state.isModal})
              }
              title="アイテムを削除"
              resource={'アイテム'}
              actionMessage="を削除しますか？"
              isShowYesButton
              yesLabel="削除する"
              yesHandler={() => null}
              isShowNoButton
              noLabel="キャンセル"
              noHandler={() => {}}
              btnStyling
            />
          </div>
        );
      }),
    ),
  );
