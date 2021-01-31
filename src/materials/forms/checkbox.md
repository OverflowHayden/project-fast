---
name: Checkbox
category: Forms
---

```checkbox.html
<div class="checkbox">
    <input id="cb" type="checkbox" class="checkbox__input" />
    <label for="cb" class="checkbox__label">Checkbox</label>
</div>
<div class="checkbox">
    <input id="cb2" type="checkbox" class="checkbox__input" disabled checked />
    <label for="cb2" class="checkbox__label">Checkbox</label>
</div>
```

#### Variables
```
@use "setup/variables" with (
    $checkbox: (
        "size": 1.6rem,
        "active": $color-primary,
        "inactive": #757575,
        "check": $color-base-white,
    )
);
```