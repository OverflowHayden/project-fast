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
$color-chip:                      #e0e0e0 !default;
$color-chip-text:                 rgba($color-base-black, .87) !default;
$chips-border-radius:             1.2em !default;
```