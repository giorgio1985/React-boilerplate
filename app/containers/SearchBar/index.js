/**
 *
 * SearchBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSearchBar from './selectors';
import reducer from './reducer';
import saga from './saga';
import Search from './SearchBar';
import SearchIcon from './SearchIcon';

export function SearchBar() {
  useInjectReducer({ key: 'searchBar', reducer });
  useInjectSaga({ key: 'searchBar', saga });

  return (
    <div style={{ height: '4em' }}>
      <Search>
        <input placeholder="search .." />
        <SearchIcon>
          <i className="fa fa-search" aria-hidden="true" />
        </SearchIcon>
      </Search>
    </div>
  );
}

SearchBar.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchBar: makeSelectSearchBar(),
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

export default compose(withConnect)(SearchBar);
