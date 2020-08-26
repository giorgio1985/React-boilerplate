import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the felpeUomo state domain
 */

const selectFelpeUomoDomain = state => state.felpeUomo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FelpeUomo
 */

const makeSelectFelpeUomo = () =>
  createSelector(
    selectFelpeUomoDomain,
    substate => substate,
  );

export default makeSelectFelpeUomo;
export { selectFelpeUomoDomain };
