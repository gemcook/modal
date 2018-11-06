/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import * as R from 'ramda';
import ReactModal from 'react-modal';
import {Image} from 'semantic-ui-react';
import Buttons from './Buttons';
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
    btnStyleing,
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
                    <div>
                      <h1>{title}</h1>
                      <p>
                        <b>{resource}</b>
                        {actionMessage}
                      </p>
                    </div>
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
        <Buttons
          isShowNoButton={isShowNoButton}
          isShowYesButton={isShowYesButton}
          isLoading={isLoading}
          noHandler={noHandler}
          noLabel={noLabel}
          yesHandler={yesHandler}
          yesLabel={yesLabel}
          btnStyleing={btnStyleing}
        />
      </div>
    </ReactModal>
  );
}

export default enhance(props => <Modal {...props} />);
