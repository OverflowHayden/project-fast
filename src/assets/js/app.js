import tippy from 'tippy.js';
import fastAppbar from './components/appbar.js';
import fastMenu from './components/menu.js';
import fastDrawer from './components/drawer.js';
import fastFab from './components/fab.js';
import fastUpload from './components/upload-field.js';
import fastSnackbar from './components/snackbar.js';
import fastHelpers from './helpers.js';

fastHelpers();
fastAppbar();
fastMenu();
fastDrawer();
fastFab();
fastUpload();
fastSnackbar();

const fast = {
    fastHelpers() { fastHelpers() },
    fastAppbar() { fastAppbar() },
    fastMenu() { fastMenu() },
    fastDrawer() { fastDrawer() },
    fastFab() { fastFab() },
    fastUpload() { fastUpload() },
    fastSnackbar() { fastSnackbar() }
}

export default fast;
