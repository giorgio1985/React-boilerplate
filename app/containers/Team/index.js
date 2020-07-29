/**
 *
 * Team
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
import makeSelectTeam from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import H3 from 'components/H3';
import HR from 'components/HR';
import P from 'components/P';
import ShowTeam from './ShowTeam';
import Section from '../Contact/Section';


export function Team() {
  useInjectReducer({ key: 'team', reducer });
  useInjectSaga({ key: 'team', saga });

  return (
    <div>
    <ShowTeam>
      <FormattedMessage {...messages.header} />
    </ShowTeam>
    <HR />
    <Section>
      <H3>Developer:</H3>
      <P>Giorgio Adonoo</P>
    </Section>
  </div>
  );
}

Team.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  team: makeSelectTeam(),
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

export default compose(withConnect)(Team);
