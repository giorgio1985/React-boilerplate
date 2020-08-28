/**
 *
 * GiubottiUomo
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
import makeSelectGiubottiUomo from './selectors';
import reducer from './reducer';
import saga from './saga';
import H1 from '../../components/H1';
import messages from './messages';
import HeaderUomo from '../../components/HeaderUomo';
import '../TShirtUomo/layoutTable.css';

class GiubottiUomo extends Component {
 // useInjectReducer({ key: 'giubottiUomo', reducer });
  //useInjectSaga({ key: 'giubottiUomo', saga });

  constructor(props) {
    super(props);
    this.state = {
      giubottiUomo: []
    }
  }

  componentDidMount() {
     fetch('http://localhost:3001/giubottiUomo')
     .then(res => res.json())
     .then(data => {
       let giubottiUomo = data.map((post, index) => {
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
       this.setState({ giubottiUomo: giubottiUomo})
     })
  }


  render() {
     return (
    <div>
      <FormattedMessage {...messages.header} />
      <HeaderUomo></HeaderUomo>
      <H1>Giubbotti - Uomo</H1><hr></hr>

      <div className="TShirtUomo">
          {this.state.giubottiUomo}
      </div>
    </div>
  );
}
  }
 
  export default GiubottiUomo;
/*/
GiubottiUomo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  giubottiUomo: makeSelectGiubottiUomo(),
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

export default compose(withConnect)(GiubottiUomo);
*/