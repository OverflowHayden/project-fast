---
name: Drawer
category: Organisms
---

The header image can be changed with the SASS variable: `$drawer-image`
```drawer.html
<aside class="drawer">
    <div class="drawer__drawer">
        <header class="drawer__header">
                <span class="drawer__header-text">Drawer header</span>
            </header>
            <nav class="drawer__content">
                <ul class="list">
                    <li class="list__item">
                        <a href="#" class="list__item-text">
                            <i class="list__item-graphic mdi mdi-home"></i>Dashboard
                        </a>
                    </li>
                    <li class="list__item">
                        <a href="#" class="list__item-text">
                            <i class="list__item-graphic mdi mdi-account-multiple"></i>Customers
                        </a>
                    </li>
                    <li class="list__item">
                        <a href="#" class="list__item-text">
                            <i class="list__item-graphic mdi mdi-package"></i>Products
                        </a>
                    </li>
                    <li class="list__item">
                        <a href="#" class="list__item-text">
                            <i class="list__item-graphic mdi mdi-cart"></i>Orders
                        </a>
                    </li>
                </ul>
            </nav>
    </div>
</aside>
```

### Temporary
```drawer-temporary.html
<header class="app-bar">
    <button class=app-bar__nav-toggle><i class="mdi mdi-menu"></i></button>
    <span class="app-bar__title">Temporary drawer</span>
</header>
<aside class="drawer drawer--temporary">
    <div class="drawer__drawer">
        <header class="drawer__header">
            <span class="drawer__header-text">Drawer header</span>
        </header>
        <nav class="drawer__content">
            <ul class="list">
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <i class="list__item-graphic mdi mdi-home"></i>Dashboard
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <i class="list__item-graphic mdi mdi-account-multiple"></i>Customers
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <i class="list__item-graphic mdi mdi-package"></i>Products
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <i class="list__item-graphic mdi mdi-cart"></i>Orders
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
<main>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</main>
```