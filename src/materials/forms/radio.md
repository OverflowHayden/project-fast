---
name: Radio button
category: Forms
---

```radio.html
<div class="radio">
    <input id="rb" type="radio" name="radio" class="radio__input" />
    <label for="rb" class="radio__label">Radio button</label>
</div>
<div class="radio">
    <input id="rb2" type="radio" name="radio" class="radio__input" />
    <label for="rb2" class="radio__label">Radio button</label>
</div>
<div class="radio">
    <input id="rb3" type="radio" name="radio" class="radio__input" disabled checked />
    <label for="rb3" class="radio__label">Radio button</label>
</div>
```

#### Variables
```
@use "setup/variables" with (
    $radio: (
        "size": 1.6rem,
        "active": $color-primary,
        "inactive": #757575,
    )
);
```