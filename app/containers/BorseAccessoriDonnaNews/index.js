/**
 *
 * BorseAccessoriDonnaNews
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
import makeSelectBorseAccessoriDonnaNews from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderDonna from '../../components/HeaderDonna';
import H1 from '../../components/H1';

export function BorseAccessoriDonnaNews() {
  useInjectReducer({ key: 'borseAccessoriDonnaNews', reducer });
  useInjectSaga({ key: 'borseAccessoriDonnaNews', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderDonna></HeaderDonna>
      <H1>Borse e Accessori - Donna</H1><hr></hr>
    </div>
  );
}

BorseAccessoriDonnaNews.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  borseAccessoriDonnaNews: makeSelectBorseAccessoriDonnaNews(),
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

export default compose(withConnect)(BorseAccessoriDonnaNews);
