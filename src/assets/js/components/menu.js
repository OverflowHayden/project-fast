export default function fastMenu() {
    if (document.querySelectorAll('.menu__toggle').length > 0) {
        const menus = document.querySelectorAll('.menu__toggle');
        const menuLists = document.querySelectorAll('.menu__list');

        for (let i = 0, menu; menu = menus[i]; i++) {
            if (menu !== null) {
                menu.addEventListener('click', function (e) {
                    e.preventDefault();
                    const menuList = document.querySelector(this.dataset.menu);

                    if (menuList.classList.contains('menu--open')) {
                        menuList.classList.remove('menu--open');
                    } else {
                        closeMenus(menuLists);
                        menuList.classList.add('menu--open');
                    }
                });
            }
        }

        document.body.addEventListener('mousedown', function (e) {
            if (hasClass(e.target, 'menu') == false) {
                closeMenus(menuLists);
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

    function closeMenus(menuLists) {
        for (let i = 0, menuList; menuList = menuLists[i]; i++) {
            if (menuList !== null) {
                if (menuList.classList.contains('menu--open')) {
                    menuList.classList.remove('menu--open');
                }
            }
        }
    }
}