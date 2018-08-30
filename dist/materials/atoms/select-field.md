---
name: Select field
category: Atoms
---

```select-field.html
<div class="select-field">
    <select id="select" name="select" class="select-field__input">
        <option>Nothing selected</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <label for="select" class="select-field__label">Select label</label>
    <span class="field__helper">Select an option</span>
</div>
```

#### Variables
```
$color-text-field-label:          rgba($color-base-black, 0.54) !default;
$color-text-field-inactive:       #8a8a8a !default;
$color-text-field-active:         $color-primary !default;
```