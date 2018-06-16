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

var Snackbar = require("snackbarlightjs");