/**
 *
 * OcchialiUomo
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectOcchialiUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';
import H1 from '../../components/H1';
import '../TShirtUomo/layoutTable.css';

class OcchialiUomo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      occhialiUomo: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/occhialiUomo')
    .then(res => res.json())
    .then(data => {
      let occhialiUomo = data.map((post, index)=> {
        return (
          <div className="center" key={index}>
          foto: <div className="jobCards">
                  <img src = { require(`../../images/${post.risorsa}`) } crossOrigin="anonymous" width="100%" />  
                </div>  
            id:  <p>{post.id}</p>
         Marca:  <p>{post.marca}</p>
         Costo:  <p>{post.costo}</p>
  pubblicazione: <p>{post.pubblicazione}</p>
  
          </div>
        )
      })
      this.setState({ occhialiUomo: occhialiUomo })
    })
  }

  render() {
      return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderUomo></HeaderUomo>
      <H1>Occhiali - Uomo</H1><hr></hr>

      <div id="googleBox">
        {this.state.occhialiUomo}
      </div>
    </div>
  );
}
  }


export default OcchialiUomo;
