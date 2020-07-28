/**
 *
 * Product
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
import makeSelectProduct from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Product() {
  useInjectReducer({ key: 'product', reducer });
  useInjectSaga({ key: 'product', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Product.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  product: makeSelectProduct(),
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

export default compose(withConnect)(Product);
