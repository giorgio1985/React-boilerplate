/**
 *
 * StivaliUomo
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
import makeSelectStivaliUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';
import H1 from '../../components/H1';

export function StivaliUomo() {
  useInjectReducer({ key: 'stivaliUomo', reducer });
  useInjectSaga({ key: 'stivaliUomo', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderUomo></HeaderUomo>
      <H1>Stivali - Uomo</H1> 
      <hr></hr>
    </div>
  );
}

StivaliUomo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stivaliUomo: makeSelectStivaliUomo(),
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

export default compose(withConnect)(StivaliUomo);
