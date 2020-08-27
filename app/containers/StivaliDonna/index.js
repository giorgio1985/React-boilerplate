/**
 *
 * StivaliDonna
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStivaliDonna from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderDonna from '../../components/HeaderDonna';
import H1 from '../../components/H1';

export function StivaliDonna() {
  useInjectReducer({ key: 'stivaliDonna', reducer });
  useInjectSaga({ key: 'stivaliDonna', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderDonna></HeaderDonna>
      <H1>Stivali - Donna</H1><hr></hr>
    </div>
  );
}

StivaliDonna.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stivaliDonna: makeSelectStivaliDonna(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(StivaliDonna);
