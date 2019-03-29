if(document.querySelectorAll('.menu__toggle').length > 0) {
    var menus = document.querySelectorAll('.menu__toggle');

    for (var i = 0, menu; menu = menus[i]; i++) {
        if (menu !== null) {
            menu.addEventListener('click', function (e) {
                e.preventDefault();
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

function hasClass(element, className) {
    do {
        if (element.classList && element.classList.contains(className)) {
            return true;
        }
        element = element.parentNode;
    } while (element);
    return false;
}