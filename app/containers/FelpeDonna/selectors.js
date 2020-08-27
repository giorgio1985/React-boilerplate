import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the felpeDonna state domain
 */

const selectFelpeDonnaDomain = state => state.felpeDonna || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FelpeDonna
 */

const makeSelectFelpeDonna = () =>
  createSelector(
    selectFelpeDonnaDomain,
    substate => substate,
  );

export default makeSelectFelpeDonna;
export { selectFelpeDonnaDomain };
