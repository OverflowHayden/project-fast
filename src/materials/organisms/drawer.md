---
name: Drawer
category: Organisms
---

### Required
```drawer.js
import Fast from 'project-fast';
Fast.Drawer();
```

The header image can be changed with the SASS variable: `$drawer-image`. If you want a dark drawer add the class `drawer--dark` to the `drawer__drawer` element.
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
                        <iconify-icon class="list__item-graphic" data-icon="mdi:home"></iconify-icon>Dashboard
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:account-multiple"></iconify-icon>Customers
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:package"></iconify-icon>Products
                    </a>
                    <ul class="list">
                        <li class="list__item">
                            <a href="#" class="list__item-text">
                                Product 1
                            </a>
                        </li>
                        <li class="list__item">
                            <a href="#" class="list__item-text">
                                Product 2
                            </a>
                        </li>
                        <li class="list__item">
                            <a href="#" class="list__item-text">
                                Product 3
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:cart"></iconify-icon>Orders
                    </a>
                </li>
                <li class="list__divider"></li>
                <li class="list__item list__item--header">
                    <span class="list__item-secondary-text">Help</span>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:help-circle"></iconify-icon>Help & Feedback
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:information"></iconify-icon>About
                    </a>
                </li>
            </ul>
            <ul class="list list--bottom">
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:settings"></iconify-icon>Settings
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
```

### Compact
```drawer-compact.html
<aside class="drawer drawer--compact">
    <div class="drawer__drawer">
        <header class="drawer__header">
            <span class="drawer__header-text">Drawer header</span>
        </header>
        <nav class="drawer__content">
            <ul class="list">
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:home"></iconify-icon>Dashboard
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:account-multiple"></iconify-icon>Customers
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:package"></iconify-icon>Products
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:cart"></iconify-icon>Orders
                    </a>
                </li>
                <li class="list__divider"></li>
                <li class="list__item list__item--header">
                    <span class="list__item-secondary-text">Help</span>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:help-circle"></iconify-icon>Help & Feedback
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:information"></iconify-icon>About
                    </a>
                </li>
            </ul>
            <ul class="list list--bottom">
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:settings"></iconify-icon>Settings
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
```

### Temporary
```drawer-temporary.html
<aside class="drawer drawer--temporary">
    <div class="drawer__drawer">
        <header class="drawer__header">
            <span class="drawer__header-text">Drawer header</span>
        </header>
        <nav class="drawer__content">
            <ul class="list">
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:home"></iconify-icon>Dashboard
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:account-multiple"></iconify-icon>Customers
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:package"></iconify-icon>Products
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:cart"></iconify-icon>Orders
                    </a>
                </li>
                <li class="list__divider"></li>
                <li class="list__item list__item--header">
                    <span class="list__item-secondary-text">Help</span>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:help-circle"></iconify-icon>Help & Feedback
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:information"></iconify-icon>About
                    </a>
                </li>
            </ul>
            <ul class="list list--bottom">
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:settings"></iconify-icon>Settings
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
<main class="main">
    <header class="app-bar">
        <button class=app-bar__nav-toggle><iconify-icon data-icon="mdi:menu"></iconify-icon></button>
        <span class="app-bar__title">Temporary drawer</span>
    </header>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</main>
```

### Persistent
The drawer will change to temporary on mobile
```drawer-persistent.html
<aside class="drawer drawer--persistent">
    <div class="drawer__drawer">
        <header class="drawer__header">
            <span class="drawer__header-text">Drawer header</span>
        </header>
        <nav class="drawer__content">
            <ul class="list">
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:home"></iconify-icon>Dashboard
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:account-multiple"></iconify-icon>Customers
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:package"></iconify-icon>Products
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:cart"></iconify-icon>Orders
                    </a>
                </li>
                <li class="list__divider"></li>
                <li class="list__item list__item--header">
                    <span class="list__item-secondary-text">Help</span>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:help-circle"></iconify-icon>Help & Feedback
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:information"></iconify-icon>About
                    </a>
                </li>
            </ul>
            <ul class="list list--bottom">
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:settings"></iconify-icon>Settings
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
<main class="main">
    <header class="app-bar">
        <button class=app-bar__nav-toggle><iconify-icon data-icon="mdi:menu"></iconify-icon></button>
        <span class="app-bar__title">Persistent drawer</span>
    </header>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</main>
```

### Permanent
The drawer will change to temporary on mobile
```drawer-permanent.html
<aside class="drawer drawer--permanent">
    <div class="drawer__drawer">
        <header class="drawer__header">
            <span class="drawer__header-text">Drawer header</span>
        </header>
        <nav class="drawer__content">
            <ul class="list">
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:home"></iconify-icon>Dashboard
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:account-multiple"></iconify-icon>Customers
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:package"></iconify-icon>Products
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:cart"></iconify-icon>Orders
                    </a>
                </li>
                <li class="list__divider"></li>
                <li class="list__item list__item--header">
                    <span class="list__item-secondary-text">Help</span>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:help-circle"></iconify-icon>Help & Feedback
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:information"></iconify-icon>About
                    </a>
                </li>
            </ul>
            <ul class="list list--bottom">
                <li class="list__item">
                    <a href="#" class="list__item-text">
                        <iconify-icon class="list__item-graphic" data-icon="mdi:settings"></iconify-icon>Settings
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
<main class="main">
    <header class="app-bar">
        <button class=app-bar__nav-toggle><iconify-icon data-icon="mdi:menu"></iconify-icon></button>
        <span class="app-bar__title">Permanent drawer</span>
    </header>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</main>
```

#### Variables
```
$drawer-image:                    "../img/logo.svg" !default;
$drawer-background:               url($drawer-image) no-repeat center bottom 50px / auto calc(100% - 65px) !default;

$color-drawer:                    $color-base-white !default;
$color-drawer-text:               rgba($color-base-black, .87) !default;
$color-drawer-header:             $color-primary !default;
$color-drawer-header-text:        $color-base-white !default;
$color-drawer-border:             #e0e0e0 !default;
```