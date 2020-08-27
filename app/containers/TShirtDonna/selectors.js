import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tShirtDonna state domain
 */

const selectTShirtDonnaDomain = state => state.tShirtDonna || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TShirtDonna
 */

const makeSelectTShirtDonna = () =>
  createSelector(
    selectTShirtDonnaDomain,
    substate => substate,
  );

export default makeSelectTShirtDonna;
export { selectTShirtDonnaDomain };
