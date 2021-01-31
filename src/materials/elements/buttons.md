---
name: Buttons
category: Elements
---

```buttons.html
<button class="button">Button</button>
<button class="button button--alt">Button alt</button>
<button class="button button--text">Text</button>
```

### Icon buttons
```iconbuttons.html
<button class="button"><iconify-icon data-icon="mdi:cloud-download"></iconify-icon>Button</button>
<button class="button button--alt"><iconify-icon data-icon="mdi:cloud-download"></iconify-icon>Button alt</button>
<button class="button button--text"><iconify-icon data-icon="mdi:cloud-download"></iconify-icon>Text</button>
```

### Compact buttons
```compact.html
<button class="button button--compact"><iconify-icon data-icon="mdi:cloud-download"></iconify-icon>Button</button>
<button class="button button--compact button--alt">Button alt</button>
<button class="button button--compact button--text">Text</button>
```

### Icon
```icon.html
<button class="button button--icon"><iconify-icon data-icon="mdi:eye"></iconify-icon></button>
<button class="button button--icon button--alt"><iconify-icon data-icon="mdi:pencil"></iconify-icon></button>
<button class="button button--icon button--text"><iconify-icon data-icon="mdi:delete"></iconify-icon></button>
```

#### Variables
```
@use "setup/variables" with (
    $button: (
        "background": red,
        "border-radius": .1875em,
        "color": white,
        "font-size": 1.6rem,
        "padding": .75em 1.375em .6875em,
        "compact": (
            "font-size": 80%,
            "padding": .5em 1em .4375em,
        )
    )
);
```