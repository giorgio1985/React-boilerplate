import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the occhialiUomo state domain
 */

const selectOcchialiUomoDomain = state => state.occhialiUomo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by OcchialiUomo
 */

const makeSelectOcchialiUomo = () =>
  createSelector(
    selectOcchialiUomoDomain,
    substate => substate,
  );

export default makeSelectOcchialiUomo;
export { selectOcchialiUomoDomain };
