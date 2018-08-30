---
name: Checkbox
category: Atoms
---

```checkbox.html
<div class="checkbox">
    <input id="cb" type="checkbox" />
    <label for="cb" class="checkbox__input"></label>
    <label for="cb" class="checkbox__label">Checkbox</label>
</div>
<div class="checkbox">
    <input id="cb2" type="checkbox" disabled checked />
    <label for="cb2" class="checkbox__input"></label>
    <label for="cb2" class="checkbox__label">Checkbox</label>
</div>
```

#### Variables
```
$color-checkbox-active:           $color-primary !default;
$color-checkbox-inactive:         #757575 !default;
$color-checkbox-check:            $color-base-white !default;
```