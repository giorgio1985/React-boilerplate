/**
 *
 * StivalettiDonna
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStivalettiDonna from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderDonna from '../../components/HeaderDonna';
import H1 from '../../components/H1';
import '../TShirtUomo/layoutTable.css';

class StivalettiDonna extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stivalettiDonna: []
    }
  }

componentDidMount() {
  fetch('http://localhost:3001/stivalettiDonna')
  .then(res => res.json())
  .then(data => {
    let stivalettiDonna = data.map((post, index)=> {
      return (
        <div className="center" key={index}>
        foto: <div className="jobCards">
                <img src = { require(`../../images/${post.risorsa}`) } crossOrigin="anonymous" width="100%" />  
              </div>  
          id:  <p>{post.id}</p>
      misura:  <p>{post.misura}</p>
       Marca:  <p>{post.marca}</p>
       Costo:  <p>{post.costo}</p>
pubblicazione: <p>{post.pubblicazione}</p>

        </div>
      )
    })
    this.setState({ stivalettiDonna: stivalettiDonna })
  })
}

  render() {
      return (
    <div>
      <Helmet>
        <title>StivalettiDonna</title>
        <meta name="description" content="Description of StivalettiDonna" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <HeaderDonna></HeaderDonna>
      <H1>Stivaletti - Donna</H1><hr></hr>

      <div id="tableContent">
        { this.state.stivalettiDonna }
      </div>
    </div>
  );
}
  }


export default StivalettiDonna;
