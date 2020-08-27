/**
 *
 * Asynchronously loads the component for Gonne
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
