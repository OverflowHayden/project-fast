import tippy from 'tippy.js'
var Snackbar = require("snackbarlightjs");

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
}


//----------------------------------------------------------------------------------
// Tippy tooltips
//----------------------------------------------------------------------------------
tippy('[title]', {
    size: 'large',
    performance: false
})


//----------------------------------------------------------------------------------
// App Bar
//----------------------------------------------------------------------------------
if(document.querySelector('.app-bar')) {
    var appBar = document.querySelector('.app-bar');
    var scrollPosition = 0;
    var scrollDirection = 0;
    var ticking = false;

    if(appBar.classList.contains('app-bar--prominent')) {
        document.body.classList.add('with-app-bar--prominent');
    }
    else if(appBar.classList.contains('app-bar--dense')) {
        document.body.classList.add('with-app-bar--dense');
    }
    else if(appBar.classList.contains('app-bar--fixed')) {
        document.body.classList.add('with-app-bar--fixed');
    }
    else {
        document.body.classList.add('with-app-bar');
    }

    if(!document.body.classList.contains('with-app-bar--fixed')) {
        window.addEventListener('scroll', function (e) {
            scrollDirection = window.scrollY - scrollPosition;

            scrollPosition = window.scrollY;

            if (!ticking) {

                window.requestAnimationFrame(function () {
                    appBarScroll(scrollDirection);
                    ticking = false;
                });

                ticking = true;

            }
        });
    }
}

function appBarScroll(scrollDirection) {
    var appBar = document.querySelector('.app-bar');
    var appBarHeight = parseInt(window.getComputedStyle(appBar).height, 10);
    var position = parseInt(window.getComputedStyle(appBar).top, 10);

    console.log(appBarHeight)

    if(position - scrollDirection < -appBarHeight) {
        appBar.style.top = '-' + appBarHeight + 'px';
    }
    else if(position - scrollDirection > 0) {
        appBar.style.top = '0px';
    }
    else {
        appBar.style.top = position - scrollDirection + 'px';
    }
}

//----------------------------------------------------------------------------------
// Menu
//----------------------------------------------------------------------------------
if(document.querySelectorAll('.menu__toggle').length > 0) {
    var menus = document.querySelectorAll('.menu__toggle');

    for (var i = 0, menu; menu = menus[i]; i++) {
        if (menu !== null) {
            menu.addEventListener('click', function () {
                var menuList = document.querySelector(this.dataset.menu);

                if(menuList.classList.contains('menu--open')) {
                    menuList.classList.remove('menu--open');
                }
                else {
                    menuList.classList.add('menu--open');
                }
            });
        }
    }

    document.body.addEventListener('mousedown', function(e){
        if(hasClass(e.target, 'menu') == false) {
            var menuLists = document.querySelectorAll('.menu__list');

            for (var i = 0, menuList; menuList = menuLists[i]; i++) {
                if (menu !== null) {
                    if(menuList.classList.contains('menu--open')) {
                        menuList.classList.remove('menu--open');
                    }
                }
            }
        }
    }, true);
}

//----------------------------------------------------------------------------------
// Drawer toggle
//----------------------------------------------------------------------------------
if(document.querySelector('.app-bar__nav-toggle')) {
    var toggle = document.querySelector('.app-bar__nav-toggle');
    var drawer = document.querySelector('.drawer');

    toggle.addEventListener('click', function(){
        if(drawer.classList.contains('drawer--open')) {
            drawer.classList.remove('drawer--open');
            document.body.classList.remove('drawer-scroll-lock');
        }
        else {
            drawer.classList.add('drawer--open');
            document.body.classList.add('drawer-scroll-lock');
        }
    });

    drawer.addEventListener('click', function(e){
        if(hasClass(e.target.parentNode, 'drawer') == false) {
            drawer.classList.remove('drawer--open');
            document.body.classList.remove('drawer-scroll-lock');
        }
    });
}