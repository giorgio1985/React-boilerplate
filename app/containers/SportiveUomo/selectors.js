import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sportiveUomo state domain
 */

const selectSportiveUomoDomain = state => state.sportiveUomo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SportiveUomo
 */

const makeSelectSportiveUomo = () =>
  createSelector(
    selectSportiveUomoDomain,
    substate => substate,
  );

export default makeSelectSportiveUomo;
export { selectSportiveUomoDomain };
