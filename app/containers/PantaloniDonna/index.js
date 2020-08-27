/**
 *
 * PantaloniDonna
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
import makeSelectPantaloniDonna from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderDonna from '../../components/HeaderDonna';
import H1 from '../../components/H1';

export function PantaloniDonna() {
  useInjectReducer({ key: 'pantaloniDonna', reducer });
  useInjectSaga({ key: 'pantaloniDonna', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderDonna></HeaderDonna>
      <H1>Pantaloni - Donna</H1><hr></hr>
    </div>
  );
}

PantaloniDonna.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pantaloniDonna: makeSelectPantaloniDonna(),
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

export default compose(withConnect)(PantaloniDonna);
