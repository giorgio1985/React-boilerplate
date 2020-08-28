/**
 *
 * FelpeUomo
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
import makeSelectFelpeUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import H1 from '../../components/H1';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';
import '../TShirtUomo/layoutTable.css';

class FelpeUomo extends Component {
  //useInjectReducer({ key: 'felpeUomo', reducer });
  //useInjectSaga({ key: 'felpeUomo', saga });

  constructor(props) {
    super(props);
    this.state = {
      felpeUomo: []
    }

  }

componentDidMount() {
  fetch('http://127.0.0.1:3001/felpeUomo')
  .then(res => res.json())
  .then(data => {
    let felpeUomo = data.map((post, index) => {
      return (
        <div className="center" key={index}>
        foto: <div className="jobCards">
                <img src={require(`C:/Users/giorgio.adonoo/Documents/React-boilerplate/app/images/${post.risorsa}`)} width="100%" /> 
              </div>  
          id:  <p>{post.id}</p>
       Marca:  <p>{post.marca}</p>
       Costo:  <p>{post.costo}</p>
pubblicazione:  <p>{post.pubblicazione}</p>

        </div>
      )
    })
    this.setState({felpeUomo: felpeUomo})
  })
}



render() {
    return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderUomo></HeaderUomo>
      <H1>Maglie e Felpe - Uomo</H1><hr></hr>

      <div className="TShirtUomo">
          {this.state.felpeUomo}
      </div>
    </div>
  );
}
}


export default FelpeUomo;
/*
FelpeUomo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  felpeUomo: makeSelectFelpeUomo(),
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

export default compose(withConnect)(FelpeUomo);
*/
