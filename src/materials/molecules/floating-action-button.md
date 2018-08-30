---
name: Floating Action Button (FAB)
category: Molecules
---

## Default
```fab.html
<div class="fab">
    <a href="#" class="fab__button"><i class="mdi mdi-plus"></i></a>
</div>
```

### Centered
```fab-center.html
<div class="fab fab--center">
    <a href="#" class="fab__button"><i class="mdi mdi-plus"></i></a>
</div>
```

### FAB menu
```fab-menu.html
<div class="fab fab--menu" title="Add" data-tippy-placement="left" data-tippy-theme="light" tabindex="1">
    <a href="#" class="fab__button"><i class="mdi mdi-plus"></i></a>
    <ul class="fab__list">
        <li class="fab__list-item">
            <a href="#"><span class="fab__text">Action 1</span><i class="fab__icon mdi mdi-pencil"></i></a>
        </li>
        <li class="fab__list-item">
            <a href="#"><span class="fab__text">Action 2</span><i class="fab__icon mdi mdi-file-multiple"></i></a>
        </li>
        <li class="fab__list-item">
            <a href="#"><span class="fab__text">Action 3</span><i class="fab__icon mdi mdi-delete"></i></a>
        </li>
    </ul>
</div>
```

#### Variables
```
$color-fab:                       $color-primary !default;
$color-fab-text:                  $color-base-white !default;
```