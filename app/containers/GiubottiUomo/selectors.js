import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the giubottiUomo state domain
 */

const selectGiubottiUomoDomain = state => state.giubottiUomo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GiubottiUomo
 */

const makeSelectGiubottiUomo = () =>
  createSelector(
    selectGiubottiUomoDomain,
    substate => substate,
  );

export default makeSelectGiubottiUomo;
export { selectGiubottiUomoDomain };
