/* @flow */
import {compose, setDisplayName, type HOC} from 'recompose';

const enhance: HOC<*, *> = compose(setDisplayName('Modal'));

export default enhance;
