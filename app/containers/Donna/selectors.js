import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the donna state domain
 */

const selectDonnaDomain = state => state.donna || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Donna
 */

const makeSelectDonna = () =>
  createSelector(
    selectDonnaDomain,
    substate => substate,
  );

export default makeSelectDonna;
export { selectDonnaDomain };
