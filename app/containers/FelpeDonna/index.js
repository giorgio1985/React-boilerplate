/**
 *
 * FelpeDonna
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
import makeSelectFelpeDonna from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderDonna from '../../components/HeaderDonna';
import H1 from '../../components/H1';

export function FelpeDonna() {
  useInjectReducer({ key: 'felpeDonna', reducer });
  useInjectSaga({ key: 'felpeDonna', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderDonna></HeaderDonna>
      <H1>Maglie &amp; Felpe - Donna</H1><hr></hr>
    </div>
  );
}

FelpeDonna.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  felpeDonna: makeSelectFelpeDonna(),
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

export default compose(withConnect)(FelpeDonna);
