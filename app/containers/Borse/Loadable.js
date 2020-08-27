/**
 *
 * Asynchronously loads the component for Borse
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
