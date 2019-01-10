import {compose, lifecycle, setDisplayName} from 'recompose';

const enhance = compose(
  setDisplayName('GcModal'),
  lifecycle({
    componentDidMount() {
      const {
        isShowYesButton,
        yesHandler,
        isShowCancelButton,
        cancelHandler,
      } = this.props;
      if (isShowYesButton && !yesHandler) {
        console.error(
          'if you wish yes button, must be having "isShowYesButton" "yesHandler".',
        );
      }

      if (isShowCancelButton && !cancelHandler) {
        console.error(
          'if you wish cancel button, must be having "isShowCancelButton" "cancelHandler".',
        );
      }
    },
  }),
);

export default enhance;
