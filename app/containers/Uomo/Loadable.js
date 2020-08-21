/**
 *
 * Asynchronously loads the component for Uomo
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
