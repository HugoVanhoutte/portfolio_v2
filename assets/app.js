import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */

/*
*   Hugo: This is where I import stylesheets, TODO: Is it where I import scripts as well ?
*/
import './styles/app.css';
import './styles/bootstrap.min.css';
import './scripts/bootstrap.bundle.min.js';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
