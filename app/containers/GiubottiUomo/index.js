/**
 *
 * GiubottiUomo
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
import makeSelectGiubottiUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import H1 from '../../components/H1';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';

export function GiubottiUomo() {
  useInjectReducer({ key: 'giubottiUomo', reducer });
  useInjectSaga({ key: 'giubottiUomo', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderUomo></HeaderUomo>
      <H1>Giubbotti - Uomo</H1><hr></hr>
    </div>
  );
}

GiubottiUomo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  giubottiUomo: makeSelectGiubottiUomo(),
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

export default compose(withConnect)(GiubottiUomo);
