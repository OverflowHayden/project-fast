---
name: Radio button
category: Atoms
---

```radio.html
<div class="radio">
    <input id="rb" type="radio" name="radio" />
    <label for="rb" class="radio__input"></label>
    <label for="rb" class="radio__label">Radio button</label>
</div>
<div class="radio">
    <input id="rb2" type="radio" name="radio" />
    <label for="rb2" class="radio__input"></label>
    <label for="rb2" class="radio__label">Radio button</label>
</div>
<div class="radio">
    <input id="rb3" type="radio" name="radio" disabled checked />
    <label for="rb3" class="radio__input"></label>
    <label for="rb3" class="radio__label">Radio button </label>
</div>
```

#### Variables
```
$color-radio-active:              $color-primary !default;
$color-radio-inactive:            #757575 !default;
```