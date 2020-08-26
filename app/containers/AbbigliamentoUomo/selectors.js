import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the abbigliamentoUomo state domain
 */

const selectAbbigliamentoUomoDomain = state =>
  state.abbigliamentoUomo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AbbigliamentoUomo
 */

const makeSelectAbbigliamentoUomo = () =>
  createSelector(
    selectAbbigliamentoUomoDomain,
    substate => substate,
  );

export default makeSelectAbbigliamentoUomo;
export { selectAbbigliamentoUomoDomain };
