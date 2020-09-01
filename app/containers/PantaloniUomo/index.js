/**
 *
 * PantaloniUomo
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
import makeSelectPantaloniUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import H1 from '../../components/H1';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';
import '../TShirtUomo/layoutTable.css';

class PantaloniUomo extends Component {
 // useInjectReducer({ key: 'pantaloniUomo', reducer });
  //useInjectSaga({ key: 'pantaloniUomo', saga });

  constructor(props) {
    super(props);
    this.state = {
      pantaloniUomo: []
    }
  }
  
  componentDidMount() {
    fetch('http://127.0.0.1:3001/pantaloniUomo')
    .then(res => res.json())
    .then(data => {
     let pantaloniUomo = data.map((post, index)=> {
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
     this.setState({ pantaloniUomo: pantaloniUomo})
    })
  }

  render() {
      return (
    <div>
      <FormattedMessage {...messages.header} />    
        <HeaderUomo></HeaderUomo>
      <H1>Pantaloni - Uomo</H1><hr></hr>

      <div className="TShirtUomo">
          {this.state.pantaloniUomo}
      </div>
    </div>
  );
}
  }

  export default PantaloniUomo;

/*
PantaloniUomo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pantaloniUomo: makeSelectPantaloniUomo(),
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

export default compose(withConnect)(PantaloniUomo);
*/