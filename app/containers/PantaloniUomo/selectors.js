import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pantaloniUomo state domain
 */

const selectPantaloniUomoDomain = state => state.pantaloniUomo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PantaloniUomo
 */

const makeSelectPantaloniUomo = () =>
  createSelector(
    selectPantaloniUomoDomain,
    substate => substate,
  );

export default makeSelectPantaloniUomo;
export { selectPantaloniUomoDomain };
