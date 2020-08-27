/**
 *
 * AbbigliamentoDonnaNews
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
import makeSelectAbbigliamentoDonnaNews from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import H1 from '../../components/H1';
import HeaderDonna from '../../components/HeaderDonna';

export function AbbigliamentoDonnaNews() {
  useInjectReducer({ key: 'abbigliamentoDonnaNews', reducer });
  useInjectSaga({ key: 'abbigliamentoDonnaNews', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderDonna></HeaderDonna>
      <H1>Abbigliamento - Donna</H1><hr></hr>
    </div>
  );
}

AbbigliamentoDonnaNews.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  abbigliamentoDonnaNews: makeSelectAbbigliamentoDonnaNews(),
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

export default compose(withConnect)(AbbigliamentoDonnaNews);
