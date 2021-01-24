---
name: Chips
category: Atoms
---

```chips.html
<div class="chip">
    <span class="chip__text">Chip</span>
</div>
<div class="chip chip--primary">
    <span class="chip__text">Chip primary</span>
</div>
<div class="chip chip--alt">
    <span class="chip__text">Chip alt</span>
</div>
```

### Leading icon
```chips-icon.html
<div class="chip">
    <span class="chip__icon"><iconify-icon data-icon="mdi:account-circle"></iconify-icon></span>
    <span class="chip__text">Chip</span>
</div>
<div class="chip chip--primary">
    <span class="chip__icon"><iconify-icon data-icon="mdi:calendar"></iconify-icon></span>
    <span class="chip__text">Chip primary</span>
</div>
<div class="chip chip--alt">
    <span class="chip__icon"><iconify-icon data-icon="mdi:cloud-download"></iconify-icon></span>
    <span class="chip__text">Chip alt</span>
</div>
```

### Filter
```chips-filter.html
<div class="chip">
    <span class="chip__text">Chip</span>
    <a href="#" class="chip__filter"><iconify-icon data-icon="mdi:close-circle"></iconify-icon></a>
</div>
<div class="chip chip--primary">
    <span class="chip__text">Chip primary</span>
    <a href="#" class="chip__filter"><iconify-icon data-icon="mdi:close-circle"></iconify-icon></a>
</div>
<div class="chip chip--alt">
    <span class="chip__text">Chip alt</span>
    <a href="#" class="chip__filter"><iconify-icon data-icon="mdi:close-circle"></iconify-icon></a>
</div>
```

#### Variables
```
@use "setup/variables" with (
    $chip: (
        "background": #e0e0e0,
        "background-primary": $color-primary,
        "border-radius": 1.2em,
        "color": rgba($color-base-black, .87),
        "color-primary": $color-base-white,
        "font-size": 1.4rem,
        "padding": .5em .857em,
        "height": 2em,
        "icon-font-size": 1.6rem,
    )
);
```