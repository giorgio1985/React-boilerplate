/**
 *
 * TShirtUomo
 *
 */

import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTShirtUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import H1 from '../../components/H1';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';
import './shirtUomo.css';


class TShirtUomo extends Component {
  //useInjectReducer({ key: 'tShirtUomo', reducer });
  //useInjectSaga({ key: 'tShirtUomo', saga });
constructor(props) {
  super(props);
  this.state = {
    shirtsUomo: []
    
  }

}

componentDidMount() {
  fetch('http://127.0.0.1:3001/shirtsUomo')
  .then(res => res.json())
  .then(data => {
let shirtsUomo = data.map((post, index) =>{

  console.log(`${post.risorsa}`);
  return (
    <div className="center" key={index}>
            foto: <div className="jobCards">
                    <img src={require(`C:/Users/giorgio.adonoo/Documents/React-boilerplate/app/images/${post.risorsa}`)} width="100%" /> 
                  </div>  
              id:  <p>{post.id}</p>
           Marca:  <p>{post.marca}</p>
           Costo:  <p>{post.costo}</p>
   pubblicazione:  <p>{post.pubblicazione}</p>
         
{/**/} 
  
        
    </div>
  )
})
this.setState({shirtsUomo: shirtsUomo});
  })
}

render() {     
   
    return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderUomo></HeaderUomo>
      <H1>T-Shirts - Uomo</H1><hr></hr>
      
     

      <div className="TShirtUomo">
          {this.state.shirtsUomo}
      </div>
    </div>
  );
}


}

export default TShirtUomo;

/*
TShirtUomo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tShirtUomo: makeSelectTShirtUomo(),
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
*/
//export default compose(withConnect)(TShirtUomo);