export default class Menu {
    menus: NodeList;
    menuLists: NodeList;

    constructor(menus: string = '.menu__toggle', menuLists: string = '.menu__list') {
        if (document.querySelectorAll(menus).length > 0) {
            this.menus = document.querySelectorAll(menus);
            this.menuLists = document.querySelectorAll(menuLists);

            this.menus.forEach(menu => {
                menu.addEventListener('click', (e) => {
                    e.preventDefault();
                    const menuList = document.querySelector((menu as HTMLElement).dataset.menu);

                    if (menuList.classList.contains('menu--open')) {
                        menuList.classList.remove('menu--open');
                    } else {
                        this.closeMenus();
                        menuList.classList.add('menu--open');
                    }
                });
            });

            document.body.addEventListener('mousedown', (e) => {
                if (this.hasClass(e.target, 'menu') == false) {
                    this.closeMenus();
                }
            }, true);
        }
    }

    protected hasClass(element: any, className: string) {
        do {
            if (element.classList && element.classList.contains(className)) {
                return true;
            }
            element = element.parentNode;
        } while (element);
        return false;
    }

    protected closeMenus() {
        this.menuLists.forEach((menuList: HTMLElement) => {
            if (menuList.classList.contains('menu--open')) {
                menuList.classList.remove('menu--open');
            }
        });
    }
}