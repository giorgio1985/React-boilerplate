/**
 *
 * Donna
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
import makeSelectDonna from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderDonna from '../../components/HeaderDonna';

import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import shutterstock from '../../images/shutterstock.jpg';
import shutterstock2 from '../../images/shutterstock2.jpg';
import shutterstock3 from '../../images/shutterstock3.jpg';

export function Donna() {
  useInjectReducer({ key: 'donna', reducer });
  useInjectSaga({ key: 'donna', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderDonna></HeaderDonna>

      <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
          {/* */}  <img src={shutterstock} width="100%" alt=""/>
          </div>
      
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={shutterstock2} width="100%" alt="" />
          </div>
          
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={shutterstock3} width="100%" alt="" />
          </div>
          
        </div>
      </Fade>
    </div>
    
    </div>
  );
}

Donna.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  donna: makeSelectDonna(),
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

export default compose(withConnect)(Donna);
