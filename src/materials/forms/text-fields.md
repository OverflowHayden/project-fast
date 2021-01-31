---
name: Text fields
category: Forms
---

### Field styles
```field-styles.html
<div class="text-field">
    <input id="text" type="text" name="text" class="text-field__input" placeholder="Placeholder" />
    <label for="text" class="text-field__label">Default style</label>
</div>

<div class="text-field field--fill">
    <input id="text2" type="text" name="text" class="text-field__input" placeholder="Placeholder" />
    <label for="text2" class="text-field__label">Fill style</label>
</div>

<div class="text-field field--outline">
    <input id="text3" type="text" name="text" class="text-field__input" placeholder="Placeholder" />
    <label for="text3" class="text-field__label">Outline style</label>
</div>
```

### Text field
```text-field.html
<div class="text-field">
    <input id="text" type="text" name="text" class="text-field__input" placeholder="Placeholder" />
    <label for="text" class="text-field__label">Text style</label>
</div>
```

### Number field
```number-field.html
<div class="number-field">
    <input id="text" type="number" name="text" class="number-field__input" placeholder="Placeholder" />
    <label for="text" class="number-field__label">Number label</label>
</div>
```

### Password field
```password-field.html
<div class="password-field">
    <input id="text" type="password" name="password" class="password-field__input" placeholder="Placeholder" />
    <label for="text" class="password-field__label">Password label</label>
</div>
```

### Textarea field
```textarea-field.html
<div class="textarea-field">
    <textarea id="text" name="textarea" class="textarea-field__input" placeholder="Placeholder"></textarea>
    <label for="text" class="textarea-field__label">Textarea label</label>
</div>
```

### Prefix & Suffix
```prefix-suffix.html
<div class="number-field">
    <span class="field__prefix">&euro;</span>
    <input id="number" type="number" name="number" class="number-field__input" placeholder="0" />
    <label for="number" class="number-field__label">Price</label>
    <span class="field__helper">Please enter euro's</span>
</div>

<div class="number-field field--fill">
    <span class="field__prefix">&euro;</span>
    <input id="number2" type="number" name="number" class="number-field__input" placeholder="0" />
    <label for="number2" class="number-field__label">Price</label>
    <span class="field__helper">Please enter euro's</span>
</div>

<div class="number-field field--outline">
    <span class="field__prefix">&euro;</span>
    <input id="number3" type="number" name="number" class="number-field__input" placeholder="0" />
    <label for="number3" class="number-field__label">Price</label>
    <span class="field__helper">Please enter euro's</span>
</div>

<div class="number-field">
    <span class="field__suffix">kg</span>
    <input id="number4" type="number" name="number" class="number-field__input" placeholder="0" />
    <label for="number4" class="number-field__label">Weight</label>
    <span class="field__helper">Please enter kilograms</span>
</div>

<div class="number-field field--fill">
    <span class="field__suffix">kg</span>
    <input id="number5" type="number" name="number" class="number-field__input" placeholder="0" />
    <label for="number5" class="number-field__label">Weight</label>
    <span class="field__helper">Please enter kilograms</span>
</div>

<div class="number-field field--outline">
    <span class="field__suffix">kg</span>
    <input id="number6" type="number" name="number" class="number-field__input" placeholder="0" />
    <label for="number6" class="number-field__label">Weight</label>
    <span class="field__helper">Please enter kilograms</span>
</div>
```

### Helper text
```field-helper.html
<div class="text-field field--fill">
    <input id="text" type="text" name="text" class="text-field__input" placeholder="Placeholder" />
    <label for="text" class="text-field__label">Text field</label>
    <span class="field__helper">Helper text</span>
</div>
```

### Field error
```field-error.html
<div class="text-field field--outline field--error">
    <input id="text" type="text" name="text" class="text-field__input" placeholder="Placeholder" value="Wrong" />
    <label for="text" class="text-field__label">Text field</label>
    <span class="field__error-text">Error!</span>
</div>
```

#### Variables
```
@use "setup/variables" with (
    $input-field: (
        "font-size": 1.6rem,
        "label": rgba($color-base-black, .54),
        "inactive": #8a8a8a,
        "active": $color-primary,
        "fill": darken($color-base-white, 6%),
        "helper": rgba($color-base-black, 0.54),
        "error": #f44336,
        "disabled": (
            "background": #f9f9f9,
            "color": lighten($color-text, 30%),
        ),
    )
);
```