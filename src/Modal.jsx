/* @flow */
import React from 'react';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import {Image} from 'semantic-ui-react';
import {assets} from './config';
import enhance from './enhance';
import type {Props} from './type';

ReactModal.setAppElement('body');

function Modal(props: Props) {
  const {
    isModal,
    handleCloseModal,
    size,
    height,
    isCloseButton,
    ModalBody,
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
      }}>
      <div
        className={classNames({
          w__close: true,
          hide: isCloseButton === false,
        })}
        onClick={() => handleCloseModal(!isModal)}
        role="button"
        tabIndex={0}>
        <Image src={assets.icons.close} />
      </div>
      <div className="b__body">
        <ModalBody {...props} />
      </div>
    </ReactModal>
  );
}

export default enhance(props => <Modal {...props} />);
