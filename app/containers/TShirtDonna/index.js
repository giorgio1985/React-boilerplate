/**
 *
 * TShirtDonna
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
import makeSelectTShirtDonna from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderDonna from '../../components/HeaderDonna';
import H1 from '../../components/H1';
import '../TShirtUomo/layoutTable.css';

class TShirtDonna extends Component {

  constructor(props){
      super(props);
      this.state = {
        shirtsDonna: []
      }
  }

  componentDidMount() {
    fetch('http://localhost:3001/shirtsDonna')
    .then(res => res.json())
    .then(data => {
      let shirtsDonna = data.map((post, index)=> {
        return (
          <div className="center" key={index}>
          foto: <div className="jobCards">
                  <img src={require(`C:/Users/giorgio.adonoo/Documents/React-boilerplate/app/images/${post.risorsa}`)} width="100%" /> 
                </div>  
            id:  <p>{post.id}</p>
        taglia:  <p>{post.taglia}</p>
         Marca:  <p>{post.marca}</p>
         Costo:  <p>{post.costo}</p>
  pubblicazione: <p>{post.pubblicazione}</p>
  
          </div>
        )
      })
      this.setState({ shirtsDonna: shirtsDonna })
    })
  }
  render() {

     return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderDonna></HeaderDonna>
      <H1>T-Shirts - Donna</H1><hr></hr>

     <div id="tableContent">
       { this.state.shirtsDonna }
     </div>
    </div>
  );
} 
  }

  export default TShirtDonna;