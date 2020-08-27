import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the borseAccessoriDonnaNews state domain
 */

const selectBorseAccessoriDonnaNewsDomain = state =>
  state.borseAccessoriDonnaNews || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BorseAccessoriDonnaNews
 */

const makeSelectBorseAccessoriDonnaNews = () =>
  createSelector(
    selectBorseAccessoriDonnaNewsDomain,
    substate => substate,
  );

export default makeSelectBorseAccessoriDonnaNews;
export { selectBorseAccessoriDonnaNewsDomain };
