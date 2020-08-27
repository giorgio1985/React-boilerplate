import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the borse state domain
 */

const selectBorseDomain = state => state.borse || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Borse
 */

const makeSelectBorse = () =>
  createSelector(
    selectBorseDomain,
    substate => substate,
  );

export default makeSelectBorse;
export { selectBorseDomain };
