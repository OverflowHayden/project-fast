---
name: Icons
category: Atoms
---

Click <a href="https://materialdesignicons.com/" target="_blank">here</a> to see the full collection
```icons.html
<i class="mdi mdi-home"></i>
<i class="mdi mdi-account"></i>
<i class="mdi mdi-download"></i>
<i class="mdi mdi-bitcoin"></i>
<i class="mdi mdi-calendar"></i>
<i class="mdi mdi-email"></i>
<i class="mdi mdi-folder"></i>
<i class="mdi mdi-pencil"></i>
<i class="mdi mdi-file-multiple"></i>
<i class="mdi mdi-delete"></i>
```

### Font Size
The classes `.mdi-18px`, `.mdi-24px`, `.mdi-36px`, and `.mdi-48px` can be added to easily change the size of the icon to the most optimal sizes.
```icon-fontsize.html
<i class="mdi mdi-home mdi-24px"></i>
<i class="mdi mdi-home mdi-36px"></i>
```

### Colors
Use either `.mdi-light` or `.mdi-dark` to set the color of the icon to the default material values. You can also add `.mdi-inactive` to an element with those classes to use the inactive color variant.
```icon-colors.html
<i class="mdi mdi-home mdi-light"></i> 
<i class="mdi mdi-home mdi-dark"></i> 
<i class="mdi mdi-home mdi-light mdi-inactive"></i> 
<i class="mdi mdi-home mdi-dark mdi-inactive"></i> 
```

### Flip
Icons can be flipped horizontally and/or vertically using the classes `.mdi-flip-h` and `.mdi-flip-v`.
```icon-flip.html
<i class="mdi mdi-home mdi-flip-h"></i> 
<i class="mdi mdi-home mdi-flip-v"></i> 
```

### Rotate
Icons can be rotated by 45 degree increments using the syntax `.mdi-rotate-[angle]` where angle is one of the following values: 45, 90, 135, 180, 225, 270, or 315.
```icon-rotate.html
<i class="mdi mdi-home mdi-rotate-45"></i> 
<i class="mdi mdi-home mdi-rotate-180"></i> 
```

### Iconsets
```icon-iconsets.html
<div class="mdi-set">
  <i class="mdi-star"></i>
  <i class="mdi-star"></i>
  <i class="mdi-star"></i>
  <i class="mdi-star"></i>
  <i class="mdi-star"></i>
</div>
```

#### Variables
```
$color-icon:                      #6d6d6d !default;
```