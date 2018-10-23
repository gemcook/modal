/* @flow */
type ButtonProps = {
  isShowYesButton?: boolean,
  yesLabel?: string,
  yesHandler?: Function,
  isShowCancelButton?: boolean,
  cancelLabel?: string,
  cancelHandler?: Function,
};

type Props = {
  isModal: boolean,
  handleCloseModal: (isModal: boolean) => boolean,
  size: string,
  height: number,
  closeButton: boolean,
  ModalBody: any,
  isCloseButton: boolean,
  children?: Function,
} & ButtonProps;

export type {Props};
