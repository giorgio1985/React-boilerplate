/**
 *
 * Asynchronously loads the component for ScarpeDonnaNews
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
