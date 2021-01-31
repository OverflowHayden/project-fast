---
name: Floating Action Button (FAB)
category: Components
---

### Required
```fab.js
import Fast from 'project-fast';
Fast.Fab();
```

## Default
```fab.html
<div class="fab">
    <a href="#" class="fab__button"><iconify-icon data-icon="mdi:plus"></iconify-icon></a>
</div>
```

### Centered
```fab-center.html
<div class="fab fab--center">
    <a href="#" class="fab__button"><iconify-icon data-icon="mdi:plus"></iconify-icon></a>
</div>
```

### FAB menu
```fab-menu.html
<div class="fab fab--menu" data-tippy-content="Add" tabindex="1">
    <a href="#" class="fab__button"><iconify-icon data-icon="mdi:plus"></iconify-icon></a>
    <ul class="fab__list">
        <li class="fab__list-item">
            <a href="#"><span class="fab__text">Action 1</span><span class="fab__icon"><iconify-icon data-icon="mdi:pencil"></iconify-icon></span></a>
        </li>
        <li class="fab__list-item">
            <a href="#"><span class="fab__text">Action 2</span><span class="fab__icon"><iconify-icon data-icon="mdi:file-multiple"></iconify-icon></span></a>
        </li>
        <li class="fab__list-item">
            <a href="#"><span class="fab__text">Action 3</span><span class="fab__icon"><iconify-icon data-icon="mdi:delete"></iconify-icon></span></a>
        </li>
    </ul>
</div>
```

#### Variables
```
@use "setup/variables" with (
    $fab: (
        "background": $color-primary,
        "color": $color-base-white,
        "icon": "../img/dots-vertical.svg",
        "size": 5.6rem,
        "text": (
            "background": $color-base-white,
            "color": $color-text,
            "padding": .4rem .6rem .3rem,
        ),
        "icon": (
            "background": $color-primary,
            "color": $color-base-white,
            "size": 4rem,
        ),
    ),
);
```