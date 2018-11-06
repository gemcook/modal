/* @flow */
import * as React from 'react';
import classNames from 'classnames';
import {Button} from 'semantic-ui-react';
import type {ButtonProps} from './type.flow';

type Props = {} & ButtonProps;

export default function Buttons(props: Props) {
  const {
    isShowNoButton,
    isShowYesButton,
    isLoading,
    noHandler,
    noLabel,
    yesHandler,
    yesLabel,
    btnStyleing,
  } = props;
  return (
    <div className="w__button">
      {isShowNoButton && (
        <Button
          className={classNames({
            'two-buttons': isShowNoButton && isShowYesButton,
            no: isShowNoButton,
            btnStyleing,
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
            btnStyleing,
          })}
          loading={isLoading}
          disabled={isLoading}
          onClick={yesHandler}
        >
          {yesLabel}
        </Button>
      )}
    </div>
  );
}
