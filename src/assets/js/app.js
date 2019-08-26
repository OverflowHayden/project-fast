import tippy from 'tippy.js';
import fastAppbar from './components/appbar.js';
import fastMenu from './components/menu.js';
import fastDrawer from './components/drawer.js';
import fastFab from './components/fab.js';
import fastUpload from './components/upload-field.js';
import fastSnackbar from './components/snackbar.js';

fastAppbar();
fastMenu();
fastDrawer();
fastFab();
fastUpload();
fastSnackbar();

document.documentElement.className += (window.self == window.top ? " top" : "framed");

//----------------------------------------------------------------------------------
// IE & Edge placeholder-shown fix
//----------------------------------------------------------------------------------
function placeholderPolyfill() {
    this.classList[this.value ? 'add' : 'remove']('placeholder-hidden');
}

if ((!(document.documentMode) && window.StyleMedia) || ((/*@cc_on!@*/false) || (document.documentMode))) {
    document.querySelectorAll('[placeholder]').forEach(el => {
        el.classList[el.value ? 'add' : 'remove']('placeholder-hidden');
        el.addEventListener('change', placeholderPolyfill);
        el.addEventListener('keyup', placeholderPolyfill);
    });
}

export default { fastAppbar, fastMenu, fastDrawer, fastFab, fastUpload, fastSnackbar };
