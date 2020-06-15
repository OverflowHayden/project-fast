---
name: Floating Action Button (FAB)
category: Molecules
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
$color-fab:                       $color-primary !default;
$color-fab-text:                  $color-base-white !default;
$fab-menu-icon:                   '../img/dots-vertical.svg' !default;
```