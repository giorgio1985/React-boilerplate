import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the accessoriNews state domain
 */

const selectAccessoriNewsDomain = state => state.accessoriNews || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AccessoriNews
 */

const makeSelectAccessoriNews = () =>
  createSelector(
    selectAccessoriNewsDomain,
    substate => substate,
  );

export default makeSelectAccessoriNews;
export { selectAccessoriNewsDomain };
