---
name: Switch
category: Forms
---

```switch.html
<div class="switch">
    <label class="switch__label">Switch</label>
    <input type="checkbox" class="switch__input" />
</div>
<div class="switch">
    <label class="switch__label">Switch active</label>
    <input type="checkbox" class="switch__input" checked />
</div>
<div class="switch">
    <label class="switch__label">Switch disabled</label>
    <input type="checkbox" class="switch__input" disabled />
</div>
```

#### Variables
```
@use "setup/variables" with (
    $switch: (
        "size": 1.6rem,
        "active": $color-primary,
        "inactive": #fafafa,
    )
);
```