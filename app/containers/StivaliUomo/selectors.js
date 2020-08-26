import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stivaliUomo state domain
 */

const selectStivaliUomoDomain = state => state.stivaliUomo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StivaliUomo
 */

const makeSelectStivaliUomo = () =>
  createSelector(
    selectStivaliUomoDomain,
    substate => substate,
  );

export default makeSelectStivaliUomo;
export { selectStivaliUomoDomain };
