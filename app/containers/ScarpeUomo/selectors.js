import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the scarpeUomo state domain
 */

const selectScarpeUomoDomain = state => state.scarpeUomo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ScarpeUomo
 */

const makeSelectScarpeUomo = () =>
  createSelector(
    selectScarpeUomoDomain,
    substate => substate,
  );

export default makeSelectScarpeUomo;
export { selectScarpeUomoDomain };
