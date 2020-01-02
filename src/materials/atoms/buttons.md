---
name: Buttons
category: Atoms
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
$color-button:                    $color-primary !default;
$color-button-text:               $color-base-white !default;
```