export default function legacySupport () {
    function hasClass(element, className) {
        do {
            if (element.classList && element.classList.contains(className)) {
                return true;
            }
            element = element.parentNode;
        } while (element);
        return false;
    }

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

        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function (callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }

        if (!Object.prototype.forEach) {
            Object.defineProperty(Object.prototype, 'forEach', {
                value: function (callback, thisArg) {
                    if (this == null) {
                        throw new TypeError('Not an object');
                    }
                    thisArg = thisArg || window;
                    for (var key in this) {
                        if (this.hasOwnProperty(key)) {
                            callback.call(thisArg, this[key], key, this);
                        }
                    }
                }
            });
        }

        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function (callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }
    }

    document.documentElement.className += (window.self == window.top ? " top" : "framed");
}