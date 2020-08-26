/**
 *
 * Asynchronously loads the component for ScarpeUomo
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
