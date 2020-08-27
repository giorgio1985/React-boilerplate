import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the occhialiDonna state domain
 */

const selectOcchialiDonnaDomain = state => state.occhialiDonna || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by OcchialiDonna
 */

const makeSelectOcchialiDonna = () =>
  createSelector(
    selectOcchialiDonnaDomain,
    substate => substate,
  );

export default makeSelectOcchialiDonna;
export { selectOcchialiDonnaDomain };
