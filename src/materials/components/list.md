---
name: List
category: Components
---

### Single-Line
```list-single.html
<ul class="list list--demo">
    <li class="list__item">
        <a href="#" class="list__item-text">List item 1</a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">List item 2</a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">List item 3</a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">List item 4</a>
    </li>
</ul>
```

### Striped
```list-striped.html
<ul class="list list--demo list--striped">
    <li class="list__item">
        <a href="#" class="list__item-text">List item 1</a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">List item 2</a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">List item 3</a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">List item 4</a>
    </li>
</ul>
```

### Compact
```list-compact.html
<ul class="list list--demo list--compact">
    <li class="list__item">
        <a href="#" class="list__item-text">List item 1</a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">List item 2</a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">List item 3</a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">List item 4</a>
    </li>
</ul>
```

### Two-Line
```list-two.html
<ul class="list list--demo">
    <li class="list__item">
        <a href="#" class="list__item-text">
            List item 1
            <span class="list__item-secondary-text">Secondary text</span>
        </a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">
            List item 2
            <span class="list__item-secondary-text">Secondary text</span>
        </a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">
            List item 3
            <span class="list__item-secondary-text">Secondary text</span>
        </a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">
            List item 4
            <span class="list__item-secondary-text">Secondary text</span>
        </a>
    </li>
</ul>
```

### Leading icon
```list-leading-icon.html
<ul class="list list--demo">
    <li class="list__item">
        <a href="#" class="list__item-text">
            <iconify-icon class="list__item-graphic" data-icon="mdi:calendar"></iconify-icon>List item 1
        </a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">
            <iconify-icon class="list__item-graphic" data-icon="mdi:cards"></iconify-icon>List item 2
        </a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">
            <iconify-icon class="list__item-graphic" data-icon="mdi:chart-bar"></iconify-icon>List item 3
        </a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">
            <iconify-icon class="list__item-graphic" data-icon="mdi:cloud-download"></iconify-icon>List item 4
        </a>
    </li>
</ul>
```

### Trailing icon
```list-traling-icon.html
<ul class="list list--demo">
    <li class="list__item">
        <a href="#" class="list__item-text">
            List item 1
            <iconify-icon class="list__item-meta" data-icon="mdi:information"></iconify-icon>
        </a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">
            List item 2
            <iconify-icon class="list__item-meta" data-icon="mdi:information"></iconify-icon>
        </a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">
            List item 3
            <iconify-icon class="list__item-meta" data-icon="mdi:information"></iconify-icon>
        </a>
    </li>
    <li class="list__item">
        <a href="#" class="list__item-text">
            List item 4
            <iconify-icon class="list__item-meta" data-icon="mdi:information"></iconify-icon>
        </a>
    </li>
</ul>
```

#### Variables
```
@use "setup/variables" with (
    $list: (
        "background": $color-base-white,
        "border": #e0e0e0,
        "color": rgba($color-base-black, .87),
        "font-size": 1.6rem,
        "height": 4.8rem,
        "padding": 1.5rem 1.6rem,
        "compact": (
            "font-size": 1.4rem,
            "height": 3.6rem,
        ),
        "secondary": (
            "color": rgba($color-base-black, .54),
            "font-size": 1.4rem,
        ),
        "graphic": (
            "color": rgba($color-base-black, .38),
            "font-size": 2.4rem,
            "size": 2.4rem,
        ),
        "meta": (
            "color": rgba($color-base-black, .38),
            "font-size": 2.4rem,
        ),
        "divider": rgba($color-base-black, .12),
    )
);
```