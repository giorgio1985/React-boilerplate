/**
 *
 * PantaloniUomo
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
import makeSelectPantaloniUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import H1 from '../../components/H1';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';

export function PantaloniUomo() {
  useInjectReducer({ key: 'pantaloniUomo', reducer });
  useInjectSaga({ key: 'pantaloniUomo', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />    
        <HeaderUomo></HeaderUomo>
      <H1>Pantaloni - Uomo</H1><hr></hr>

    </div>
  );
}

PantaloniUomo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pantaloniUomo: makeSelectPantaloniUomo(),
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

export default compose(withConnect)(PantaloniUomo);
