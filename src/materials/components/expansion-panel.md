---
name: Expansion panel
category: Components
---

```expansion-panel.html
<div class="expansion-panel">
    <div class="expansion-panel__item">
        <input type="checkbox" class="expansion-panel__input">
        <div class="expansion-panel__header">
            Panel header 1
        </div>
        <div class="expansion-panel__content">
            Panel content 1
        </div>
    </div>
    <div class="expansion-panel__item">
        <input type="checkbox" class="expansion-panel__input">
        <div class="expansion-panel__header">
            Panel header 2
        </div>
        <div class="expansion-panel__content">
            Panel content 2
        </div>
    </div>
</div>
```

#### Variables
```
@use "setup/variables" with (
    $expansion-panel: (
        "background": $color-base-white,
        "color": rgba($color-base-black,.54),
    )
);
```