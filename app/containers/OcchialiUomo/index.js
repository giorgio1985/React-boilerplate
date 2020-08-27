/**
 *
 * OcchialiUomo
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
import makeSelectOcchialiUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';
import H1 from '../../components/H1';

export function OcchialiUomo() {
  useInjectReducer({ key: 'occhialiUomo', reducer });
  useInjectSaga({ key: 'occhialiUomo', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderUomo></HeaderUomo>
      <H1>Occhiali - Uomo</H1><hr></hr>
    </div>
  );
}

OcchialiUomo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  occhialiUomo: makeSelectOcchialiUomo(),
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

export default compose(withConnect)(OcchialiUomo);
