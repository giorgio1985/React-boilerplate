/**
 *
 * StivalettiDonna
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStivalettiDonna from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderDonna from '../../components/HeaderDonna';
import H1 from '../../components/H1';

export function StivalettiDonna() {
  useInjectReducer({ key: 'stivalettiDonna', reducer });
  useInjectSaga({ key: 'stivalettiDonna', saga });

  return (
    <div>
      <Helmet>
        <title>StivalettiDonna</title>
        <meta name="description" content="Description of StivalettiDonna" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <HeaderDonna></HeaderDonna>
      <H1>Stivaletti - Donna</H1><hr></hr>
    </div>
  );
}

StivalettiDonna.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  stivalettiDonna: makeSelectStivalettiDonna(),
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

export default compose(withConnect)(StivalettiDonna);
