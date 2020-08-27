import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the giubbottiDonna state domain
 */

const selectGiubbottiDonnaDomain = state =>
  state.giubbottiDonna || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GiubbottiDonna
 */

const makeSelectGiubbottiDonna = () =>
  createSelector(
    selectGiubbottiDonnaDomain,
    substate => substate,
  );

export default makeSelectGiubbottiDonna;
export { selectGiubbottiDonnaDomain };
