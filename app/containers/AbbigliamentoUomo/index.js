/**
 *
 * AbbigliamentoUomo
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
import makeSelectAbbigliamentoUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';
import H1 from '../../components/H1';

export function AbbigliamentoUomo() {
  useInjectReducer({ key: 'abbigliamentoUomo', reducer });
  useInjectSaga({ key: 'abbigliamentoUomo', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderUomo></HeaderUomo>
      <H1>Abbigliamento - Uomo</H1> 
      <hr></hr>
    </div> 
  );
}

AbbigliamentoUomo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  abbigliamentoUomo: makeSelectAbbigliamentoUomo(),
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

export default compose(withConnect)(AbbigliamentoUomo);
