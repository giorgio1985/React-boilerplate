import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the uomo state domain
 */

const selectUomoDomain = state => state.uomo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Uomo
 */

const makeSelectUomo = () =>
  createSelector(
    selectUomoDomain,
    substate => substate,
  );

export default makeSelectUomo;
export { selectUomoDomain };
