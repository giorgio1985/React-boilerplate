/**
 *
 * PantaloniDonna
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
import makeSelectPantaloniDonna from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import HeaderDonna from '../../components/HeaderDonna';
import H1 from '../../components/H1';
import '../TShirtUomo/layoutTable.css';

class PantaloniDonna extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pantaloniDonna: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/pantaloniDonna')
    .then(res => res.json())
    .then(data=> {
      let pantaloniDonna = data.map((post, index)=> {
        return (
          <div className="center" key={index}>
          foto: <div className="jobCards">
                  <img src = { require(`../../images/${post.risorsa}`) } crossOrigin="anonymous" width="100%" />  
                </div>  
            id:  <p>{post.id}</p>
        taglia:  <p>{post.taglia}</p>
         Marca:  <p>{post.marca}</p>
         Costo:  <p>{post.costo}</p>
  pubblicazione: <p>{post.pubblicazione}</p>
  
          </div>
        )
      })
      this.setState({ pantaloniDonna: pantaloniDonna})
    })

  }

render() {
    return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderDonna></HeaderDonna>
      <H1>Pantaloni - Donna</H1><hr></hr>

      <div id="tableContent">
        { this.state.pantaloniDonna }
      </div>
    </div>
  );
}
}


export default PantaloniDonna;
