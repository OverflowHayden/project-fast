---
name: Menu
category: Components
---

### Required
```menu.js
import Fast from 'project-fast';
Fast.Menu();
```

```menu.html
<div class="menu">
    <button class="button button--alt menu__toggle" data-menu="#menu">Open menu</button>
    <ul id="menu" class="menu__list">
        <li class="menu__list-item"><a href="#">Menu option 1</a></li>
        <li class="menu__list-item"><a href="#">Menu option 2</a></li>
        <li class="menu__list-item"><a href="#">Menu option 3</a></li>
        <li class="menu__list-divider"></li>
        <li class="menu__list-item"><a href="#">Menu option 4</a></li>
        <li class="menu__list-item"><a href="#">Menu option 5</a></li>
    </ul>
</div>

<div class="menu">
    <button class="button button--alt menu__toggle" data-menu="#menu2">Open menu</button>
    <ul id="menu2" class="menu__list">
        <li class="menu__list-item"><a href="#">Menu option 1</a></li>
        <li class="menu__list-item"><a href="#">Menu option 2</a></li>
        <li class="menu__list-item"><a href="#">Menu option 3</a></li>
        <li class="menu__list-divider"></li>
        <li class="menu__list-item"><a href="#">Menu option 4</a></li>
        <li class="menu__list-item"><a href="#">Menu option 5</a></li>
    </ul>
</div>
```
