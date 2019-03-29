import tippy from 'tippy.js';
var Snackbar = require("snackbarlightjs");
var fastAppbar = require('./components/appbar.js');
var fastMenu = require('./components/menu.js');
var fastDrawer = require('./components/drawer.js');
var fastFab = require('./components/fab.js');
var fastUpload = require('./components/upload-field.js');

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


//----------------------------------------------------------------------------------
// Tippy tooltips
//----------------------------------------------------------------------------------
tippy('[title]', {
    size: 'large',
    performance: false
})

