/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import * as R from 'ramda';
import ReactModal from 'react-modal';
import {Button, Image} from 'semantic-ui-react';
import {assets} from './config';
import enhance from './enhance';
import type {Element} from 'react';
import type {Props} from './type.flow';

ReactModal.setAppElement('body');

function Modal(props: Props): Element<*> {
  const {
    isModal,
    handleCloseModal,
    size,
    height,
    isCloseButton,
    ModalBody,
    isShowYesButton,
    yesLabel = 'Yes',
    yesHandler,
    isShowCancelButton,
    cancelLabel = 'No',
    cancelHandler,
    children,
  } = props;

  return (
    <ReactModal
      isOpen={isModal}
      contentLabel="ModalWrapper"
      onRequestClose={() => {
        handleCloseModal(!isModal);
      }}
      overlayClassName="a__overlay"
      className={classNames({
        app__modal: true,
        [size || 'sm']: true,
      })}
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
          hide: isCloseButton === false,
        })}
        onClick={() => handleCloseModal(!isModal)}
        role="button"
        tabIndex={0}
      >
        <Image src={assets.icons.close} />
      </div>
      <div className="b__body">
        {R.cond([
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
        ])(props)}
        {R.isNil(children) &&
          !R.isNil(ModalBody) && (
            <>
              <div className="w__modal-body">
                <ModalBody {...props} />
              </div>
              <div className="w__button">
                {isShowCancelButton && (
                  <Button
                    className={classNames({
                      'two-buttons': isShowCancelButton && isShowYesButton,
                      cancel: isShowCancelButton,
                    })}
                    onClick={cancelHandler}
                  >
                    {cancelLabel}
                  </Button>
                )}
                {isShowYesButton && (
                  <Button
                    className={classNames({
                      'two-buttons': isShowCancelButton && isShowYesButton,
                      yes: isShowYesButton,
                    })}
                    onClick={yesHandler}
                  >
                    {yesLabel}
                  </Button>
                )}
              </div>
            </>
          )}
      </div>
    </ReactModal>
  );
}

export default enhance(props => <Modal {...props} />);
