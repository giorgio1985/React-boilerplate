import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pantaloniDonna state domain
 */

const selectPantaloniDonnaDomain = state =>
  state.pantaloniDonna || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PantaloniDonna
 */

const makeSelectPantaloniDonna = () =>
  createSelector(
    selectPantaloniDonnaDomain,
    substate => substate,
  );

export default makeSelectPantaloniDonna;
export { selectPantaloniDonnaDomain };
