import * as React from 'react';
import classNames from 'classnames';
import {Button} from 'semantic-ui-react';

export default function Buttons(props) {
  const {
    isShowNoButton,
    isShowYesButton,
    isLoading,
    noHandler,
    noLabel,
    yesHandler,
    yesLabel,
    btnStyling,
  } = props;
  return (
    <div className="w__button">
      {isShowNoButton && (
        <Button
          className={classNames({
            'two-buttons': isShowNoButton && isShowYesButton,
            no: isShowNoButton,
            btnStyling,
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
            btnStyling,
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
