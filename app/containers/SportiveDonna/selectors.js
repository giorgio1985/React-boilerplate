import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sportiveDonna state domain
 */

const selectSportiveDonnaDomain = state => state.sportiveDonna || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SportiveDonna
 */

const makeSelectSportiveDonna = () =>
  createSelector(
    selectSportiveDonnaDomain,
    substate => substate,
  );

export default makeSelectSportiveDonna;
export { selectSportiveDonnaDomain };
