/**
 *
 * Portfolio
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
import HR from 'components/Hr';
import { Parallax } from 'react-parallax';
import makeSelectPortfolio from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ShowPortfolio from './ShowPortfolio';
import hipster from '../../images/hipster.jpg';
import template1 from '../../images/template1.jpg';
import template2 from '../../images/template2.jpg';

const inlineStyle = {
  background: 'white',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
};

export function Portfolio() {
  useInjectReducer({ key: 'portfolio', reducer });
  useInjectSaga({ key: 'portfolio', saga });

  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Description of Portfolio" />
      </Helmet>

      <ShowPortfolio>
        <FormattedMessage {...messages.header} />
      </ShowPortfolio>
      <HR />

      <Parallax bgImage={hipster} strength={200}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Primo progetto ...</div>
        </div>
      </Parallax>
      <h1 style={{ textAlign: 'center' }}> ||| </h1>
      <Parallax bgImage={template1} strength={200}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Secondo progetto ...</div>
        </div>
      </Parallax>
      <h1 style={{ textAlign: 'center' }}> ||| </h1>
      <Parallax bgImage={template2} strength={200}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Terzo progetto ...</div>
        </div>
      </Parallax>

      <div style={{ height: '25vh' }} />
    </div>
  );
}

Portfolio.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  portfolio: makeSelectPortfolio(),
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

export default compose(withConnect)(Portfolio);
