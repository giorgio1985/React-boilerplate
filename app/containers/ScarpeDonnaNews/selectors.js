import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the scarpeDonnaNews state domain
 */

const selectScarpeDonnaNewsDomain = state =>
  state.scarpeDonnaNews || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ScarpeDonnaNews
 */

const makeSelectScarpeDonnaNews = () =>
  createSelector(
    selectScarpeDonnaNewsDomain,
    substate => substate,
  );

export default makeSelectScarpeDonnaNews;
export { selectScarpeDonnaNewsDomain };
