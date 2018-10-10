---
name: Utilities
category: General
---

### Text alignment
```alignment.html
<div class="align-left">Align Left</div>
<div class="align-center">Align Center</div>
<div class="align-right">Align Right</div>
```

### Element alignment
```pull.html
<div class="pull-left">Pull Left</div>
<div class="pull-right">Pull Right</div>
```

### Background color
```background.html
<div class="bg--primary">Background with the primary color</div>
<div class="bg--secondary">Background with the secondary color</div>
<div class="bg--success">Background with the success color</div>
<div class="bg--error">Background with the error color</div>
```

### Text color
```color.html
<div class="color--primary">Text with the primary color</div>
<div class="color--secondary">Text with the secondary color</div>
<div class="color--success">Text with the success color</div>
<div class="color--error">Text with the error color</div>
```

### Margin
```margin.html
<div class="margin-top">Margin top</div>
<div class="margin-top--2x">Margin top 2x</div>
<div class="margin-bottom">Margin bottom</div>
<div class="margin-bottom--2x">Margin bottom 2x</div>
```

### Hidden
To hide an element, use the class `hidden`. Add a modifier `--xs` `--sm` `--md` `--lg` to activate it at a specific breakpoint.
```hidden.html
<div class="hidden">Always hidden</div>
<div class="hidden--xs">Hidden at xs breakpoint</div>
<div class="hidden--sm">Hidden at sm breakpoint</div>
<div class="hidden--md">Hidden at md breakpoint</div>
<div class="hidden--lg">Hidden at lg breakpoint</div>
```

### Visible
To make an element visible, use the class `visible`. Add a modifier `--xs` `--sm` `--md` `--lg` to activate it until a specific breakpoint.
```visible.html
<div class="visible">Always visible</div>
<div class="visible--xs">Visible until xs breakpoint</div>
<div class="visible--sm">Visible until sm breakpoint</div>
<div class="visible--md">Visible until md breakpoint</div>
<div class="visible--lg">Visible until lg breakpoint</div>
```

#### Variables
```
$margin-size:                     30px !default;
```