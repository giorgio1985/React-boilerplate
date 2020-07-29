/**
 *
 * About
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
import makeSelectAbout from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import H3 from 'components/H3';
import HR from 'components/Hr';
import P from 'components/P';
import Section from '../Contact/Section';
import ShowAbout from './ShowAbout';

export function About() {
  useInjectReducer({ key: 'about', reducer });
  useInjectSaga({ key: 'about', saga });

  return (
    <div>
    <ShowAbout>
      <FormattedMessage {...messages.header} />
    </ShowAbout>
    <HR />
    <Section>
      <H3>Chi sono:</H3>
      <P>Sono Giorgio nato a ....</P>
    </Section>
    <Section>
      <H3>Obiettivi:</H3>
      <P>
        L&apos;obbiettivo di questa applicazione consiste nell&apos;aiutare le
        persone a ....
      </P>
    </Section>
    <Section>
      <H3>Hobby:</H3>
      <P>Giavellotto, lancio col disco ....</P>
    </Section>
  </div>
  );
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  about: makeSelectAbout(),
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

export default compose(withConnect)(About);
