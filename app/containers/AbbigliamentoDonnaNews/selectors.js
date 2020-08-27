import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the abbigliamentoDonnaNews state domain
 */

const selectAbbigliamentoDonnaNewsDomain = state =>
  state.abbigliamentoDonnaNews || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AbbigliamentoDonnaNews
 */

const makeSelectAbbigliamentoDonnaNews = () =>
  createSelector(
    selectAbbigliamentoDonnaNewsDomain,
    substate => substate,
  );

export default makeSelectAbbigliamentoDonnaNews;
export { selectAbbigliamentoDonnaNewsDomain };
