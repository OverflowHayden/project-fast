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

### Customizeable
Powered by [Choices.js](https://github.com/jshjohnson/Choices)
```select-field-customizable.html
<div class="select-field field--outline">
    <select id="select" name="select" class="select-field__input">
        <option value="" placeholder>Nothing selected</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="3">Option 4</option>
        <option value="3">Option 5</option>
    </select>
    <label for="select" class="select-field__label">Select label</label>
    <span class="field__helper">Select an option</span>
</div>
<div class="select-field field--outline">
    <select id="select2" name="select" class="select-field__input" multiple>
        <option value="" placeholder>Nothing selected</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="3">Option 4</option>
        <option value="3">Option 5</option>
    </select>
    <label for="select2" class="select-field__label">Select Multiple</label>
    <span class="field__helper">Select multiple options</span>
</div>
```

```select-field-customizable.js
const choices = new Choices('#select');
const choicesMultiple = new Choices('#select2', {
    removeItemButton: true,
});

```

#### Variables
```
$color-text-field-label:          rgba($color-base-black, 0.54) !default;
$color-text-field-inactive:       #8a8a8a !default;
$color-text-field-active:         $color-primary !default;
```