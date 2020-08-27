import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stivalettiDonna state domain
 */

const selectStivalettiDonnaDomain = state =>
  state.stivalettiDonna || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StivalettiDonna
 */

const makeSelectStivalettiDonna = () =>
  createSelector(
    selectStivalettiDonnaDomain,
    substate => substate,
  );

export default makeSelectStivalettiDonna;
export { selectStivalettiDonnaDomain };
