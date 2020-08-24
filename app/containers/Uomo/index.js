/**
 *
 * Uomo
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
import makeSelectUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';

import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import stylish_hipster from '../../images/stylish_hipster.jpg';
import hipster2 from '../../images/hipster2.jpg';
import hipster3 from '../../images/hipster3.jpg';
import barba_hipster from '../../images/barba_hipster.jpg';

export function Uomo() {
  useInjectReducer({ key: 'uomo', reducer });
  useInjectSaga({ key: 'uomo', saga });

  return (

    <div>
      <FormattedMessage {...messages.header} />
      <HeaderUomo></HeaderUomo>
      <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
          {/* */}  <img src={hipster3} width="100%" alt=""/>
          </div>
      
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={hipster2} width="100%" alt="" />
          </div>
          
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={barba_hipster} width="100%" alt="" />
          </div>
          
        </div>
        
      </Fade>
    </div>
    </div>

  );
}

Uomo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  uomo: makeSelectUomo(),
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

export default compose(withConnect)(Uomo);
