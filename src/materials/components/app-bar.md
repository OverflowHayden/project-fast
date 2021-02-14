---
name: App Bar
category: Components
---

### Required
```app-bar.js
import Fast from 'project-fast';
Fast.Appbar();
```

### Default
```app-bar.html
<header class="app-bar">
    <button class=app-bar__nav-toggle><iconify-icon data-icon="mdi:menu"></iconify-icon></button>
    <span class="app-bar__title">App Bar title</span>
    <div class="app-bar__actions">
        <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:printer"></iconify-icon></a>
        <div class="menu">
            <a href="#" class="button button--icon button--text menu__toggle" data-menu="#menu"><iconify-icon data-icon="mdi:dots-vertical"></iconify-icon></a>
            <ul id="menu" class="menu__list">
                <li class="menu__list-item"><a href="#">Menu option 1</a></li>
                <li class="menu__list-item"><a href="#">Menu option 2</a></li>
                <li class="menu__list-item"><a href="#">Menu option 3</a></li>
                <li class="menu__list-divider"></li>
                <li class="menu__list-item"><a href="#">Menu option 4</a></li>
                <li class="menu__list-item"><a href="#">Menu option 5</a></li>
            </ul>
        </div>
        
    </div>
</header>
```

### Prominent
```app-bar-prominent.html
<header class="app-bar app-bar--prominent">
    <button class=app-bar__nav-toggle><iconify-icon data-icon="mdi:menu"></iconify-icon></button>
    <span class="app-bar__title">App Bar title</span>
    <div class="app-bar__actions">
        <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:printer"></iconify-icon></a>
        <div class="menu">
            <a href="#" class="button button--icon button--text menu__toggle" data-menu="#menu"><iconify-icon data-icon="mdi:dots-vertical"></iconify-icon></a>
            <ul id="menu" class="menu__list">
                <li class="menu__list-item"><a href="#">Menu option 1</a></li>
                <li class="menu__list-item"><a href="#">Menu option 2</a></li>
                <li class="menu__list-item"><a href="#">Menu option 3</a></li>
                <li class="menu__list-divider"></li>
                <li class="menu__list-item"><a href="#">Menu option 4</a></li>
                <li class="menu__list-item"><a href="#">Menu option 5</a></li>
            </ul>
        </div>
    </div>
</header>
```

### Dense
```app-bar-dense.html
<header class="app-bar app-bar--dense">
    <button class=app-bar__nav-toggle><iconify-icon data-icon="mdi:menu"></iconify-icon></button>
    <span class="app-bar__title">App Bar title</span>
    <div class="app-bar__actions">
        <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:printer"></iconify-icon></a>
        <div class="menu">
            <a href="#" class="button button--icon button--text menu__toggle" data-menu="#menu"><iconify-icon data-icon="mdi:dots-vertical"></iconify-icon></a>
            <ul id="menu" class="menu__list">
                <li class="menu__list-item"><a href="#">Menu option 1</a></li>
                <li class="menu__list-item"><a href="#">Menu option 2</a></li>
                <li class="menu__list-item"><a href="#">Menu option 3</a></li>
                <li class="menu__list-divider"></li>
                <li class="menu__list-item"><a href="#">Menu option 4</a></li>
                <li class="menu__list-item"><a href="#">Menu option 5</a></li>
            </ul>
        </div>
    </div>
</header>
```
### Fixed
```app-bar-fixed.html
<header class="app-bar app-bar--fixed">
    <button class=app-bar__nav-toggle><iconify-icon data-icon="mdi:menu"></iconify-icon></button>
    <span class="app-bar__title">App Bar title</span>
    <div class="app-bar__actions">
        <a href="#" class="button button--icon button--text"><iconify-icon data-icon="mdi:printer"></iconify-icon></a>
        <div class="menu">
            <a href="#" class="button button--icon button--text menu__toggle" data-menu="#menu"><iconify-icon data-icon="mdi:dots-vertical"></iconify-icon></a>
            <ul id="menu" class="menu__list">
                <li class="menu__list-item"><a href="#">Menu option 1</a></li>
                <li class="menu__list-item"><a href="#">Menu option 2</a></li>
                <li class="menu__list-item"><a href="#">Menu option 3</a></li>
                <li class="menu__list-divider"></li>
                <li class="menu__list-item"><a href="#">Menu option 4</a></li>
                <li class="menu__list-item"><a href="#">Menu option 5</a></li>
            </ul>
        </div>
    </div>
</header>
```

#### Variables
```
@use "setup/variables" with (
    $app-bar: (
        "background": $color-primary,
        "color": $color-base-white,
        "padding": .8rem 1.2rem,
        "height": 6.2rem,
        "title": (
            "font-size": 2rem,
        ),
        "prominent": (
            "height": 12.8rem,
        ),
        "dense": (
            "height": 5.4rem,
            "padding": .2rem .4rem,
        ),
        "icon": (
            "font-size": 2.4rem,
        ),
    ),
);
```