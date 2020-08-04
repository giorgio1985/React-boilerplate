/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import SearchBar from '../SearchBar';
import WelcomePage from './WelcomePage';
import Spot from './Spot';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './HomePage.css';
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import shutterstock from 'images/shutterstock.jpg';
import template1 from 'images/template1.jpg';
import template2 from 'images/template2.jpg';
import hipster2 from 'images/hipster2.jpg';
import barba_hipster from 'images/barba_hipster.jpg';


//import ReactPlayer from 'react-player';


const key = 'home';


export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };


  return (
    <article>
    <Helmet>
      <title>Home Page</title>
      <meta
        name="description"
        content="A React.js Boilerplate application homepage"
      />
    </Helmet>
    <WelcomePage>
      <CenteredSection>
        <div className="parallax" />
        <div>
          <div>         
         
          
          <SearchBar>
            <i className="fa fa-search" aria-hidden="true" />
          </SearchBar>
          
          </div>
        </div>
        <div className="parallax" />
      <div>  
          {/*  
           
             <ReactPlayer 
             url={'https://www.youtube.com/watch?v=rEEXRbh4ox4'}    
             config={{
               youtube: {
                 playerVars: { showinfo: 1, origin: 'https://www.youtube.com/iframe_api' }
                               
               }
             }}/> */}

  <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={shutterstock} width="100%" alt=""/>
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
        
         
      {/**/}  </div>
       <div className="parallax" /> 
      </CenteredSection>
    </WelcomePage>
  </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
