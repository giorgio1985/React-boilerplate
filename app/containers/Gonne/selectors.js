import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gonne state domain
 */

const selectGonneDomain = state => state.gonne || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Gonne
 */

const makeSelectGonne = () =>
  createSelector(
    selectGonneDomain,
    substate => substate,
  );

export default makeSelectGonne;
export { selectGonneDomain };
