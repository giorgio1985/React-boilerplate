import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tShirtUomo state domain
 */

const selectTShirtUomoDomain = state => state.tShirtUomo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TShirtUomo
 */

const makeSelectTShirtUomo = () =>
  createSelector(
    selectTShirtUomoDomain,
    substate => substate,
  );

export default makeSelectTShirtUomo;
export { selectTShirtUomoDomain };
