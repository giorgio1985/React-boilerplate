import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stivaliDonna state domain
 */

const selectStivaliDonnaDomain = state => state.stivaliDonna || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StivaliDonna
 */

const makeSelectStivaliDonna = () =>
  createSelector(
    selectStivaliDonnaDomain,
    substate => substate,
  );

export default makeSelectStivaliDonna;
export { selectStivaliDonnaDomain };
