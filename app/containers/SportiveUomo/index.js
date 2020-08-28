/**
 *
 * SportiveUomo
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
import makeSelectSportiveUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';
import H1 from '../../components/H1';
import '../TShirtUomo/layoutTable.css';

class  SportiveUomo extends Component {

constructor(props) {
  super(props);
  this.state = {
    sportiveUomo: []
  }
}  

componentDidMount() {
  fetch('http://localhost:3001/sportiveUomo')
  .then(res => res.json())
  .then(data => {
    let sportiveUomo = data.map((post, index)=> {
      return (
        <div className="center" key={index}>
        foto: <div className="jobCards">
                <img src={require(`C:/Users/giorgio.adonoo/Documents/React-boilerplate/app/images/${post.risorsa}`)} width="100%" /> 
              </div>  
          id:  <p>{post.id}</p>
      taglia:  <p>{post.misura}</p>
       Marca:  <p>{post.marca}</p>
       Costo:  <p>{post.costo}</p>
pubblicazione: <p>{post.pubblicazione}</p>

        </div>
      )
    })
    this.setState({ sportiveUomo: sportiveUomo })
  })
}

render() {
    return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderUomo></HeaderUomo>
      <H1>Scarpe sportive - Uomo</H1> 
      <hr></hr>

      <div className="TShirtUomo">
          {this.state.sportiveUomo}
      </div>
    </div>
  );
}
}


export default SportiveUomo;
