/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import {Heading, Paragraph, Strong} from 'evergreen-ui';
import * as R from 'ramda';
import ReactModal from 'react-modal';
import {Button, Image} from 'semantic-ui-react';
import {assets} from './config';
import enhance from './enhance';
import type {Element} from 'react';
import type {Props} from './type.flow';

ReactModal.setAppElement('body');

function Modal(props: Props): Element<'div'> {
  const {
    isModal,
    handleCloseModal,
    size,
    className,
    height,
    ModalBody,
    isShowYesButton,
    yesLabel = 'Yes',
    yesHandler,
    isShowNoButton,
    noLabel = 'No',
    noHandler,
    isLoading,
  } = props;

  return (
    <ReactModal
      isOpen={isModal}
      contentLabel="ModalWrapper"
      onRequestClose={() => {
        handleCloseModal(!isModal);
      }}
      overlayClassName="a__overlay"
      className={[
        classNames({
          app__modal: true,
          [size || 'sm']: true,
        }),
        className,
      ].join(' ')}
      style={{
        content: {
          minHeight: height ? `${height}px` : '150px',
          maxHeight: size === 'full' ? '100%' : '80%',
          borderRadius: size === 'full' ? '0' : '4px',
        },
      }}
    >
      <div
        className={classNames({
          w__close: true,
        })}
        onClick={() => handleCloseModal(!isModal)}
        role="button"
        tabIndex={0}
      >
        <Image src={assets.icons.close} />
      </div>
      <div className="b__body">
        <div className="w__modal-body">
          {R.isNil(ModalBody)
            ? R.cond([
                [
                  ({title, actionMessage, resource}) =>
                    R.type(title) === 'String' ||
                    (R.type(actionMessage) === 'String' &&
                      R.type(resource) === 'String'),
                  ({title, actionMessage, resource, ...rest}) => (
                    <>
                      <Heading size={700} marginTop="default">
                        {title}
                      </Heading>
                      <Paragraph marginTop="default">
                        <Strong size={500}>{resource}</Strong>
                        {actionMessage}
                      </Paragraph>
                    </>
                  ),
                ],
                [
                  ({children}) => R.type(children) === 'Function',
                  ({children, ...rest}) => children(rest),
                ],
                [
                  ({children}) => R.type(children) === 'Object',
                  ({children}) => React.Children.only(children),
                ],
                [
                  ({children}) => R.type(children) === 'String',
                  ({children}) => children,
                ],
                [R.T, () => ''],
              ])(props)
            : ModalBody && <ModalBody {...props} />}
        </div>
        <div className="w__button">
          {isShowNoButton && (
            <Button
              className={classNames({
                'two-buttons': isShowNoButton && isShowYesButton,
                cancel: isShowNoButton,
              })}
              disabled={isLoading}
              onClick={noHandler}
            >
              {noLabel}
            </Button>
          )}
          {isShowYesButton && (
            <Button
              className={classNames({
                'two-buttons': isShowNoButton && isShowYesButton,
                yes: isShowYesButton,
              })}
              loading={isLoading}
              disabled={isLoading}
              onClick={yesHandler}
            >
              {yesLabel}
            </Button>
          )}
        </div>
      </div>
    </ReactModal>
  );
}

export default enhance(props => <Modal {...props} />);
