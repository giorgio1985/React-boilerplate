/**
 *
 * TShirtUomo
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
import makeSelectTShirtUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';

export function TShirtUomo() {
  useInjectReducer({ key: 'tShirtUomo', reducer });
  useInjectSaga({ key: 'tShirtUomo', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderUomo></HeaderUomo>
    </div>
  );
}

TShirtUomo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tShirtUomo: makeSelectTShirtUomo(),
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

export default compose(withConnect)(TShirtUomo);
